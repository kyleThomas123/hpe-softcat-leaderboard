import React, { useEffect, useContext} from 'react';
import { Box, ResponsiveContext} from 'grommet';
import { DashboardGrid } from '../components/Dashboard/DashboardGrid';
import { Greeting } from '../components/Data/Greeting';
import { auth } from "../firebase_config";
import { useNavigate } from "react-router-dom";



function Home() {
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      // User is signed in
      // Perform any side effects related to the signed-in user
    } else {
      // User is signed out
      navigate('/SignIn');
    }
  }, [user, navigate]); // Ensure that the effect runs when 'user' or 'navigate' changes

  return <Box
    background="background"
    justify="center"
    pad={{
    horizontal: !['xsmall', 'small'].includes(size)
        ? 'xlarge'
        : 'medium',
    vertical: 'large',
    }}
    flex={false}
  >
    <Box gap="large">
        {user ? <Greeting /> : null}
        {user ? <DashboardGrid /> : null}
    </Box>
  </Box>
}

export default Home;
