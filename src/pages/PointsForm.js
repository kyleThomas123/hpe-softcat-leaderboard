// PointsForm.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { firestore } from '../index.js';
import { getFirestore, doc, collection, addDoc } from 'firebase/firestore'

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

export const PointsForm = () => {
  const initialPointsData = {
    OPE: '',
    accountName: '',
    businessUnit: 'Compute',
  };

  const [formValues, setFormValues] = React.useState(initialPointsData);
  const navigate = useNavigate()

  const submitPoints = async () => {
    console.log('Points form submitted');

    try {
      // Add data to Firestore
      const db = collection(firestore, 'point-forms');
      const doc = await addDoc(db, {formValues});

      // Return to homepage
      navigate("/hpe-softcat-leaderboard/SignIn");
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
            <Link to="/hpe-softcat-leaderboard/"><Button label="Cancel" /></Link>
          </Box>
        </Form>
      </Box>
    </Box>
  );

};

export default PointsForm;