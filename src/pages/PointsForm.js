// PointsForm.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase_config.js';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore'

import {
  Box,
  Button,
  Form,
  FormField,
  Header,
  Heading,
  Select,
  TextInput,
  CheckBox,
} from 'grommet';

const businessUnits = [
  'Compute',
  'AI',
  'Storage',
  'HPC',
  'Other',
];

function createRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getDateTime(){
  // Create a new Date object
  const currentDate = new Date();

  // Get the various components of the date
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so add 1
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  // Construct the date string in the desired format (e.g., "YYYY-MM-DD HH:mm:ss")
  const dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return dateString;
}

export const PointsForm = () => {
  const initialPointsData = {
    OPE: '',
    accountName: '',
    businessUnit: 'Compute',
    existingAccount: false,
    newLines: 0,
    oldLines: 0,
    points: 0.0,
    date: '',
  };

  function calculatePoints(){
    const newLines = parseFloat(formValues.newLines);
    const oldLines = parseFloat(formValues.oldLines);
    if (oldLines + newLines > 1) {
      formValues.points = ((2 * newLines) + oldLines) * 1.5;
    } else {
      formValues.points = ((2 * newLines) + oldLines);
    };
  };

  const [formValues, setFormValues] = React.useState(initialPointsData);
  const [existingAccount, setExistingAccount] = React.useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setExistingAccount(!existingAccount);
  };

  const submitPoints = async () => {
    console.log('Points form submitted');
    let isKeyUnique = false;
    let randkey = createRandomString(20);

    while (!isKeyUnique) {
      const docRef = doc(firestore, 'sales-forms', auth.currentUser.uid);
      try {
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          // Check if the key already exists in the document
          const data = docSnapshot.data();
          if (!data.hasOwnProperty(randkey)) {
            isKeyUnique = true;
          } else {
            console.log(`Key ${randkey} already exists. Generating a new one.`);
            randkey = createRandomString(20);
          }
        } else {
          isKeyUnique = true;
        }
      } catch (error) {
        console.error('Error checking document:', error);
        break;
      }
    }

     // Generate values
    formValues.date = getDateTime();
    calculatePoints();

    try {
       // Add to points forms
      const personalRef = doc(firestore, 'sales-forms', auth.currentUser.uid);
      const randkey = createRandomString(25);
      const personalSnapshot = await getDoc(personalRef);
      if (personalSnapshot.exists()) {
      // eslint-disable-next-line
        const res = await updateDoc(personalRef, {[randkey]: formValues});
      } else {
      // eslint-disable-next-line
        const res = await setDoc(personalRef, {[randkey]: formValues});
      };
      console.log('Points form uploaded to personal store');

      // Add to leaderboard
      const leaderboardRef = doc(firestore, 'points', auth.currentUser.uid);
      const leaderboardSnapshot = await getDoc(leaderboardRef);
      if (leaderboardSnapshot.exists()) {
        const currentNumber = leaderboardSnapshot.data().PointTotal;
        const newNumber = currentNumber + formValues.points;
      // eslint-disable-next-line
        const res = await updateDoc(doc(firestore, 'points', auth.currentUser.uid), {PointTotal: parseFloat(newNumber)});
      } else {
      // eslint-disable-next-line
        const res = await setDoc(doc(firestore, 'points', auth.currentUser.uid), {
          DisplayName: auth.currentUser.displayName,
          PointTotal: parseFloat(formValues.points)});
      };
      console.log('Points form uploaded to leaderboard');

      // Return to homepage
      navigate("/");
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const onFormChange = value => {
    setFormValues(value);
  };

  const onReset = () => {
    // Reset the form fields to their initial values
    setFormValues(initialPointsData);
    if (existingAccount) {
      handleCheckboxChange();
    };
  };

  return (
    <Box gap="medium" width="medium">
      <Header
        direction="column"
        align="start"
        gap="xxsmall"
        pad={{ horizontal: 'xxsmall' }}
      >
        <Heading level={2} margin="none">
          Points Form
        </Heading>
      </Header>
      <Box
        // Padding used to prevent focus from being cutoff
        pad={{ horizontal: 'xxsmall' }}
      >
        <Form value={formValues} onChange={onFormChange} method="post">
          <FormField htmlFor="OPE" name="OPE" label="OPE">
            <TextInput
              id="OPE"
              name="OPE"
              component={TextInput}
              placeholder="OPE Number"
            />
          </FormField>
          <FormField htmlFor="accountName" name="accountName" label="Account Name">
            <TextInput
              id="accountName"
              name="accountName"
              component={TextInput}
              placeholder="Account Name"
            />
          </FormField>
          <FormField
            htmlFor="businessUnit__input"
            name="businessUnit"
            label="Business Unit"
          >
            <Select
              id="businessUnit"
              name="businessUnit"
              options={businessUnits}
            />
          </FormField>
          <FormField htmlFor="newLines" name="newLines" label="New Lines">
              <TextInput
                type="number"
                id="newLines"
                name="newLines"
                component={TextInput}
                placeholder="New Lines"
              />
          </FormField>
          <FormField>
            <CheckBox
              label="Is this an existing account?"
              checked={existingAccount}
              onChange={handleCheckboxChange}
            />
          </FormField>
          {existingAccount && (
            <FormField htmlFor="oldLines" name="oldLines" label="Old Lines">
              <TextInput
                type="number"
                id="oldLines"
                name="oldLines"
                component={TextInput}
                placeholder="Old Lines"
              />
            </FormField>
          )}
          <Box direction="row-responsive" gap="medium" pad={{ top: 'medium' }}>
            <Button label="Submit Sales" onClick={submitPoints} primary />
            <Button type ="submit" label="Reset form" onClick={onReset} secondary />
            <Link to="/"><Button label="Cancel" /></Link>
          </Box>
        </Form>
      </Box>
    </Box>
  );

};

export default PointsForm;