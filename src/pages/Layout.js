import React from 'react';
import { Outlet } from "react-router-dom";
import { hpe } from 'grommet-theme-hpe';
import {Box, Grommet} from 'grommet';
import HPEFooter from '../components/Footer/Footer';
import HeaderNavigationExample from '../components/Header/Header';

const Layout = () => {

  return (
    <>
      <Grommet theme={hpe}>
          <Box width={{ max: 'xxlarge' }} margin="auto" fill>
            <HeaderNavigationExample />
            <Box overflow="auto">
              <Outlet />
              <HPEFooter />
            </Box>
          </Box>
      </Grommet>
    </>
  )
};

export default Layout;