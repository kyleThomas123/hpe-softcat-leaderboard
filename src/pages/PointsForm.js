// PointsForm.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { firestore } from '../index.js';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

import {
  Box,
  Button,
  Form,
  FormField,
  Header,
  Heading,
  Select,
  TextInput,
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

export const PointsForm = () => {
  const initialPointsData = {
    OPE: '',
    accountName: '',
    businessUnit: 'Compute',
  };

  const [formValues, setFormValues] = React.useState(initialPointsData);
  const navigate = useNavigate()
  const auth = getAuth();

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

    try {
      // Add data to Firestore
      const docRef = doc(firestore, 'sales-forms', auth.currentUser.uid);
      const randkey = createRandomString(25);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
      // eslint-disable-next-line
        const res = await updateDoc(doc(firestore, 'sales-forms', auth.currentUser.uid), {[randkey]: formValues});
      } else {
      // eslint-disable-next-line
        const res = await setDoc(doc(firestore, 'sales-forms', auth.currentUser.uid), {[randkey]: formValues});
      }
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