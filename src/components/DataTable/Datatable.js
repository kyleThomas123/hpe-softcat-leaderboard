// DataTableExample.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DataTable,
  Heading,
  Text,
} from 'grommet';

const data = [
  {
    poolName: 'Kyle',
    groupName: 'Asup',
    points: 12341,
  },
  {
    poolName: 'Jack',
    groupName: 'Dev',
    points: 3523,
  },
  {
    poolName: 'Tom',
    groupName: 'Dev',
    points: 94748,
  },
  {
    poolName: 'Ben',
    groupName: 'Asup',
    points: 1,
  },
  {
    poolName: 'Alex',
    groupName: 'Dev',
    points: 124454,
  },
  {
    poolName: 'Sacha',
    groupName: 'Asup',
    points: 9393,
  },
  {
    poolName: 'Luke',
    groupName: 'Dev',
    points: 1010,
  },
  {
    poolName: 'San',
    groupName: 'Dev',
    points: 1616,
  },
  {
    poolName: 'Lexi',
    groupName: 'Dev',
    points: 292,
  },
  {
    poolName: 'Tom',
    groupName: 'Asup',
    points: 2762,
  },
  {
    poolName: 'Plase',
    groupName: 'Dev',
    points: 2672,
  },
  {
    poolName: 'Vicki',
    groupName: 'Dev',
    points: 2652,
  },
  {
    poolName: 'Tori',
    groupName: 'Dev',
    points: 1726,
  },
];

const columns = [
  {
    property: 'poolName',
    header: 'Name',
    render: datum => <Text truncate>{datum.poolName}</Text>,
    primary: true,
  },
  {
    property: 'points',
    header: 'Points',
    units: Number,
  },


];

// const handleClickRow = obj => {
//   // eslint-disable-next-line no-alert
//   alert(`
//   Record was clicked:
//   { 
//       id: ${obj.id},
//       poolName: ${obj.poolName}
//   }
  
//   You can use onClickRow() to navigate to a record's detail
//   page, open a panel or modal to edit the record, or perform 
//   other actions as you see fit.
//   `);
// };

// designSystemDemo is used for DS site only, can be removed in production.
export const DataTableExample = ({ designSystemDemo }) => {

  return (
    <>
      <Heading
        id="storage-pools-heading"
        level={3}
        margin={{ bottom: 'small', top: 'none' }}
      >
        HPE Incentive Leaderboard
      </Heading>
      <Box
        // Height is restricted to keep inline doc page examples more compact.
        // In production, DataTable height should follow height guidelines.
        // https://design-system.hpe.design/components/datatable#setting-the-height-of-a-table
        height={designSystemDemo ? undefined : 'medium'}
        overflow="auto"
      >
        <DataTable
          aria-describedby="storage-pools-heading"
          data={data}
          columns={columns}
          fill
          // onClickRow={({ datum }) => handleClickRow(datum)}
          pin
          sort={{ property: 'points', direction: 'desc' }}
          sortable
        />
      </Box>
    </>
  );
};

DataTableExample.propTypes = {
  designSystemDemo: PropTypes.bool,
};

export default DataTableExample