import React from 'react';
import { PageHeader } from 'grommet';
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Greeting = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  if (user.displayName){
    return (
      <PageHeader
        title={`Hello, ${user.displayName}!`}
        subtitle="Welcome to the HPE Softcat Reseller Console."
      />
    );
  }
  
  if (user !== null) {
    return (
      <PageHeader
        title={`Hello!`}
        subtitle="Welcome to the HPE Softcat Reseller Console."
      />
    );
  } else {
    navigate("/SignIn");
  }
};
