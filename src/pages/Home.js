import React, { useContext} from 'react';
import { Box, ResponsiveContext} from 'grommet';
import { DashboardGrid } from '../components/Dashboard/DashboardGrid';
import { Greeting } from '../components/Data/Greeting';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";



function Home() {
  const size = useContext(ResponsiveContext);
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
    return <p>Please sign in. <Link to="/hpe-softcat-leaderboard/SignIn">Sign In</Link></p>;
  }
}

export default Home;
