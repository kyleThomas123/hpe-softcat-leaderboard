// DataTableExample.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DataTable,
  Heading,
  Text,
  ResponsiveContext,
} from 'grommet';

const data = [
  {
    id: 'mjbpiclthh8y',
    poolName: 'Kyle',
    groupName: 'Asup',
    points: 12341,
  },
  {
    id: 'hx5f2e57phfb',
    poolName: 'Jack',
    groupName: 'Dev',
    points: 3523,
  },
  {
    id: 'om2hy2z79kyz',
    poolName: 'Tom',
    groupName: 'Dev',
    points: 94748,
  },
  {
    id: '6d9u4hv95xjq',
    poolName: 'Ben',
    groupName: 'Asup',
    points: 1,
  },
  {
    id: 'qpsidi3ccnpr',
    poolName: 'Alex',
    groupName: 'Dev',
    points: 124454,
  },
  {
    id: 'l3d8xkm0knx4',
    poolName: 'Sacha',
    groupName: 'Asup',
    points: 9393,
  },
  {
    id: 'jsjas87qeqgj',
    poolName: 'Luke',
    groupName: 'Dev',
    points: 1010,
  },
  {
    id: '1jrnzxds9419',
    poolName: 'San',
    groupName: 'Dev',
    points: 1616,
  },
  {
    id: 'lva18ol56t7a',
    poolName: 'Lexi',
    groupName: 'Dev',
    points: 292,
  },
  {
    id: 'g9v1104koten',
    poolName: 'Tom',
    groupName: 'Asup',
    points: 2762,
  },
  {
    id: 'ny13xepj8wyc',
    poolName: 'Plase',
    groupName: 'Dev',
    points: 2672,
  },
  {
    id: 'vz86u3ll4ai2',
    poolName: 'Vicki',
    groupName: 'Dev',
    points: 2652,
  },
  {
    id: 'f1iucu2ybzf3',
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
  const size = React.useContext(ResponsiveContext);

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
          columns={[
            {
              property: 'id',
              header: 'Id',
              primary: true,
              render: datum => datum.id.slice(datum.id.length - 5),
              pin: ['xsmall', 'small'].includes(size),
            },
            ...columns,
          ]}
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