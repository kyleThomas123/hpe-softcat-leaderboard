import React, { useContext } from 'react';
import { PageHeader } from 'grommet';
import { getAuth } from "firebase/auth";

export const Greeting = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    return (
      <PageHeader
        title={`Hello, ${user.email}!`}
        subtitle="Welcome to the HPE Softcat Reseller Console."
      />
    );
  } else {
    return <PageHeader
      subtitle="Welcome to the HPE Softcat Reseller Console."
    />
  }
};
