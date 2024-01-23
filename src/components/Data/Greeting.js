import React, { useContext } from 'react';
import { PageHeader } from 'grommet';
import { UserContext } from '../Header/UserContext';

export const Greeting = () => {
  const { user } = useContext(UserContext);
  return (
    <PageHeader
      title={`Hello, ${user.firstName}!`}
      subtitle="Welcome to the HPE Softcat Reseller Admin Console."
    />
  );
};
