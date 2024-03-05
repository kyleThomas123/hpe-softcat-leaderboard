import React from 'react';
import { PageHeader } from 'grommet';
import { auth } from "../../firebase_config";
import { useNavigate } from "react-router-dom";

export const Greeting = () => {
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
