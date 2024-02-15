import React, { useContext} from 'react';
import { Box, ResponsiveContext} from 'grommet';
import { DashboardGrid } from '../components/Dashboard/DashboardGrid';
import { Greeting } from '../components/Data/Greeting';
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function Home() {
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
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
              <Greeting />
              <DashboardGrid />
          </Box>
        </Box>
  } else {
    // User is signed out
    navigate("/hpe-softcat-leaderboard/SignIn")
  }
}

export default Home;
