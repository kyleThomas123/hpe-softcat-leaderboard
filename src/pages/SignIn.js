// SignIn.js
import React, { useContext } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Header,
  Heading,
  ResponsiveContext,
  Spinner,
  Text,
  TextInput,
} from 'grommet';
import { Next, CircleAlert } from 'grommet-icons';
import { emailValidation } from '../components/Form/FormValidation';
import { hpe } from 'grommet-theme-hpe';
import { auth } from "../firebase_config"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const SignInExample = () => {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
  });
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [credentialError, setCredentialError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  // eslint-disable-next-line no-unused-vars
  const onSubmit = async ({ value }) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigate('/');
    } catch (error) {
      console.error('Error:', error.code, error.message);
      setCredentialError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grommet theme={hpe}>
      <Box gap="medium" width="medium">
        <Header
            direction="column"
            align="start"
            gap="xxsmall"
            pad={{ horizontal: 'xxsmall' }}
        >
            {/* Use semantically correct heading level and adjust size as 
            needed. In this instance, this example is presented within an 
            HTML section element and this is the first heading within the 
            section, therefor h2 is the semantically correct heading. For 
            additional detail, see https://design-system.hpe.design/foundation/typography#semantic-usage-of-heading-levels). */}
            <Heading level={2} margin="none">
            Sign In
            </Heading>
            <Text>to Hewlett Packard Enterprise</Text>
        </Header>
        <Box
            // Padding used to prevent focus from being cutoff
            pad={{ horizontal: 'xxsmall' }}
        >
          <Form
            validate="blur"
            value={formValues}
            onChange={setFormValues}
            messages={{
                required: 'This is a required field.',
            }}
            onSubmit={({ value, touched }) => onSubmit({ value, touched })}
          >
            <FormField
                label="Email"
                name="email"
                htmlFor="email-sign-in"
                validate={emailValidation}
                required={{ indicator: false }}
            >
                <TextInput
                id="email-sign-in"
                name="email"
                placeholder="james@hpe.com"
                type="email"
                />
            </FormField>
            <FormField
                label="Password"
                htmlFor="password-sign-in"
                name="password"
                required={{ indicator: false }}
            >
                <TextInput
                id="password-sign-in"
                name="password"
                placeholder="Enter your password"
                type="password"
                />
            </FormField>
            {credentialError && (
                <Box
                animation="fadeIn"
                align="center"
                background="validation-critical"
                direction="row"
                gap="xsmall"
                margin={{ top: 'medium', bottom: 'medium' }}
                pad="small"
                round="4px"
                >
                <CircleAlert size="small" />
                <Text size="xsmall">Invalid credentials.</Text>
                </Box>
            )}
            {loading && (
              <Box
                animation="fadeIn"
                align="center"
                margin={{ top: 'medium', bottom: 'medium' }}
              >
                <Spinner />
              </Box>
            )}
            <Box
                align={!['xsmall', 'small'].includes(size) ? 'start' : undefined}
                margin={{ top: 'medium', bottom: 'small' }}
            >
                <Button
                label="Sign In"
                icon={<Next />}
                reverse
                primary
                type="submit"
                />
            </Box>
          </Form>
          <p>Don't have an account? <Link to="/SignUp">Register</Link> now.</p>
        </Box>
      </Box>
    </Grommet>
  );
};

export default SignInExample