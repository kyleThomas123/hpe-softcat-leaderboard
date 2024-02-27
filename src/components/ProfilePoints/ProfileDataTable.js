// ProfileDataTable.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DataTable,
  Heading,
} from 'grommet';

const data = [
  {
    date:'01/25/1915',
    OPE: 'OPE-0015178673',
    accountName: 'RockStar',
    businessUnit: 'Compute',
  },
  {
    date:'11/03/2020',
    OPE: 'OPE-0015702962',
    accountName: 'Emirates',
    businessUnit: 'Storage',
  },
  {
    date:'08/06/1991',
    OPE: 'OPE-0016297847',
    accountName: 'University of Reading',
    businessUnit: 'HPC',
  },
  {
    date:'15/02/2021',
    OPE: 'OPE-0013171362',
    accountName: 'Redbull',
    businessUnit: 'Compute',
  },
  {
    date:'01/09/2023',
    OPE: 'OPE-0013501024',
    accountName: 'Disney',
    businessUnit: 'AI',
  },
  {
    date:'27/12/2023',
    OPE: 'OPE-0008872237',
    accountName: 'RockStar',
    businessUnit: 'Storage',
  },
  {
    date:'11/08/2022',
    OPE: 'OPE-0015222558',
    accountName: 'RockStar',
    businessUnit: 'AI',
  },

];

const columns = [
    { property: 'date', header: 'Date'},
    { property: 'OPE', header: 'OPE', primary: true },
    { property: 'accountName', header: 'Account Name' },
    { property: 'businessUnit', header: 'Business Unit'},
  ];

// designSystemDemo is used for DS site only, can be removed in production.
export const ProfileDataTable = ({ designSystemDemo }) => {

  return (
    <>
      <Heading
        id="my-sales-heading"
        level={3}
        margin={{ bottom: 'small', top: 'none' }}
      >
        My Sales
      </Heading>
      <Box
        // Height is restricted to keep inline doc page examples more compact.
        // In production, DataTable height should follow height guidelines.
        // https://design-system.hpe.design/components/datatable#setting-the-height-of-a-table
        height={designSystemDemo ? undefined : 'medium'}
        overflow="auto"
      >
        <DataTable
          aria-describedby="my-sales-heading"
          data={data}
          columns={columns}
          fill
          pin
          sortable
        />
      </Box>
    </>
  );
};

ProfileDataTable.propTypes = {
  designSystemDemo: PropTypes.bool,
};

export default ProfileDataTable