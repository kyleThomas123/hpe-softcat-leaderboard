import React from 'react';
import { PageHeader } from 'grommet';
import { Box } from 'grommet';
import { auth } from "../firebase_config";
import { ProfileDataTable } from '../components/ProfilePoints/ProfileDataTable';

export const Profile = () => {
  const user = auth.currentUser;

  if (user.displayName){
    return (
        <div>
            <PageHeader
                title ={`${user.displayName}'s Profile`}
            />
            <Box gap = "large">
                <ProfileDataTable></ProfileDataTable>
            </Box>
        </div>
    );
  }
};
  
  export default Profile;