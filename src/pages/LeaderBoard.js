import React, { useContext, useState, useMemo } from 'react';
import { Box, Button, ResponsiveContext, Text } from 'grommet';
import { defaultUser, UserContext} from '../components/Header/UserContext'
import DataTable from '../components/DataTable/Datatable';


function LeaderBoard() {
  const [user, setUser] = useState(defaultUser);
  const size = useContext(ResponsiveContext);
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );



  return (
    <UserContext.Provider value={contextValue}>
      <Box
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
          {user ? (
          <Box gap="large">
              <DataTable></DataTable>
          </Box>
          ) : (
          <DemoPageContent />
          )}
      </Box>
    </UserContext.Provider>
  );
}

// This is for demo purposes only. Replace in production with app
// specific content.
const DemoPageContent = () => {
  const { setUser } = useContext(UserContext);
  return (
    <Box align="center" gap="small">
      <Text>This button is for demo purposes only.</Text>
      <Button label="Sign In" primary onClick={() => setUser(defaultUser)} />
    </Box>
  );
};

export default LeaderBoard;
