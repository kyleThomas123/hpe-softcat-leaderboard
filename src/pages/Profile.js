import React from 'react';
import { PageHeader } from 'grommet';
import { Box } from 'grommet';
import { auth } from "../firebase_config";
import { useNavigate } from "react-router-dom";
import { ProfilePointsSummary } from '../components/ProfilePoints/ProfilePointsSummary';
import { ProfileDataTable } from '../components/ProfilePoints/ProfileDataTable';

export const Profile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  if (user.displayName){
    return (
        <div>
            <PageHeader
                title ={`${user.displayName}'s Profile`}
            />
            <Box gap = "large">
                <ProfilePointsSummary></ProfilePointsSummary>
                <ProfileDataTable></ProfileDataTable>
            </Box>
        </div>
    );
  }
  
  if (user !== null) {
    return (
        <div>
            <PageHeader
            title={`My Profile`}
            />
            <ProfilePointsSummary></ProfilePointsSummary>
        </div>
        
    );
  } else {
    navigate("/SignIn");
  }
};
  
  export default Profile;