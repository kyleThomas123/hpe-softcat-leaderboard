// DataTableExample.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DataTable,
  Heading,
} from 'grommet';
import { collection, query, where, getDocs } from "firebase/firestore";
import {firestore} from "../../firebase_config"

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