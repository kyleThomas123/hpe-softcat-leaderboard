// DataTableExample.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DataTable,
  Heading,
} from 'grommet';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { setupFirebase } from '../../index.js';

var data1 = [
  {PointTotal: 20, DisplayName: 'Kyle', UserID: 'hSpWweSiKQWEvdoMKP39vshHE712'},
  {
    DisplayName: 'Jane Smith',
    UserID: 'kxWMhtHVlpcvQGTv0QjXk0V7X4n1',
    PointTotal: 2,
  },
  {
    DisplayName: 'Lee',
    UserID: '6jt7qau1IXODeWEezeZF58YtG3U2',
    PointTotal: 15,
  },
  {
    DisplayName: 'Ben',
    UserID: 'iL6UDR2PyQZ9pqwY0xDNdiGuHn62',
    PointTotal: 19,
  },
  {
    DisplayName: 'Alex',
    UserID: '8EaEmTEmwOfFGlGBdNPBvIDT2G12',
    PointTotal: 1,
  },
  {
    DisplayName: 'Zac',
    UserID: 'rKT9HILOHtU3vTBkfzWIOzBrVEB2',
    PointTotal: 8,
  },
  {
    DisplayName: 'Callum',
    UserID: 'nrE3sybgR8YmygL10CGyv1Wy7h12',
    PointTotal: 7,
  },
  {
    DisplayName: 'Hiji',
    UserID: '0q2XCe1OKlhOXfaBo5Hp6xf3eAU2',
    PointTotal: 13,
  },
  {
    DisplayName: 'Progue',
    UserID: 'FVeWrGizWmVKaujUDIrer5rSX9m1',
    PointTotal: 5,
  },
  {
    DisplayName: 'Ben Barrow',
    UserID: 'ym1Vreq9SQRdYuJ6zuaHDpP27gx2',
    PointTotal: 20,
  },
  {
    DisplayName: 'Tori',
    UserID: 'ehe5jIfz3qNpd3DxTbQaU3iF2Fj2',
    PointTotal: 10,
  },
];

async function fetchData() {
  try {
    var data = await getData();
    console.log('Data:', data);
    // Handle data here
    return data;
  } catch (error) {
    console.error('Error:', error);
    // Handle error here
    throw error; // Rethrow the error if needed
  }
}

var data;
// Call fetchData in an async context
(async () => {
  try {
    data = await fetchData();
    // Continue handling data here if needed
  } catch (error) {
    // Handle errors from fetchData or getData here
  }
})();


async function getData() {
  setupFirebase
  const q = query(collection(firestore, "points"), where("PointTotal", ">", 0));

  var points = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    points.push({DisplayName: doc.data().DisplayName, PointTotal: doc.data().PointTotal})
  });
  console.log(points)
  return points
} 

const columns = [
  {
    property: 'DisplayName',
    header: 'Name',
    primary: true,
  },
  {
    property: 'PointTotal',
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
//       DisplayName: ${obj.DisplayName}
//   }
  
//   You can use onClickRow() to navigate to a record's detail
//   page, open a panel or modal to edit the record, or perform 
//   other actions as you see fit.
//   `);
// };

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