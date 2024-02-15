import React, { useContext} from 'react';
import { Box, ResponsiveContext} from 'grommet';
import DataTable from '../components/DataTable/Datatable';


function LeaderBoard() {
  const size = useContext(ResponsiveContext);
  return (
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
        <Box gap="large">
            <DataTable></DataTable>
        </Box>
    </Box>
  );
}


export default LeaderBoard;
