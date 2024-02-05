import React, { useState, useMemo } from 'react';
import { Outlet } from "react-router-dom";
import { hpe } from 'grommet-theme-hpe';
import {Box, Grommet} from 'grommet';
import HPEFooter from '../components/Footer/Footer';
import HeaderNavigationExample from '../components/Header/Header';
import { defaultUser, UserContext} from '../components/Header/UserContext'

const Layout = () => {
  const [user, setUser] = useState(defaultUser);
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );

  return (
    <>
      <Grommet theme={hpe}>
        <UserContext.Provider value={contextValue}>
          <Box width={{ max: 'xxlarge' }} margin="auto" fill>
            <HeaderNavigationExample />
            <Box overflow="auto">
              
              <Outlet />
              {user && <HPEFooter />}
            </Box>
          </Box>
        </UserContext.Provider>
      </Grommet>
    </>
  )
};

export default Layout;