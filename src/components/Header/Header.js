
import React, { useContext } from 'react';
import { Header, ResponsiveContext } from 'grommet';
import { AppIdentity } from '../AppIdentity';
import { HeaderNav } from './HeaderNav'

export const HeaderNavigationExample = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Header
      align="center"
      background="background"
      border={{ color: 'border-weak', side: 'bottom' }}
      justify="between"
      fill="horizontal"
      pad={{
        horizontal: !['xsmall', 'small'].includes(size) ? 'medium' : 'small',
        vertical: 'small',
      }}
    >
      <AppIdentity title="SoftCat Leaderboard" brand="hpe" href="/hpe-softcat-leaderboard/"/>
      {<HeaderNav />}
    </Header>
  );
};


export default HeaderNavigationExample
