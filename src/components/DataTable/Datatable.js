import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, DataTable, Heading } from 'grommet';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase_config';

async function getData() {
  const q = query(collection(firestore, 'points'), where('PointTotal', '>', 0));

  const points = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    points.push({ DisplayName: doc.data().DisplayName, PointTotal: doc.data().PointTotal });
  });
  console.log(points);
  return points;
}

export const PointsDataTable = ({ designSystemDemo }) => {
  const [data, setData] = useState([]); // Use state to manage the data

  useEffect(() => {
    const updateLeaderboard = async () => {
      try {
        const newData = await getData();
        setData(newData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    updateLeaderboard();
  }, []); // The empty dependency array [] ensures that the effect runs only once on mount

  const columns = [
    {
      property: 'DisplayName',
      header: 'Name',
      primary: true,
    },
    {
      property: 'PointTotal',
      header: 'Points',
      units: 'number',
    },
  ];

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
        height={designSystemDemo ? undefined : 'medium'}
        overflow="auto"
      >
        <DataTable
          aria-describedby="storage-pools-heading"
          data={data}
          columns={columns}
          fill
          pin
          sort={{ property: 'PointTotal', direction: 'desc' }}
          sortable
        />
      </Box>
    </>
  );
};

PointsDataTable.propTypes = {
  designSystemDemo: PropTypes.bool,
};

export default PointsDataTable;
