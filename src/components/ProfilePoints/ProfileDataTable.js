import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
Box,
Card,
CardBody,
CardHeader,
DataTable,
Heading,
NameValueList,
NameValuePair,
} from 'grommet';
import { auth, firestore } from '../../firebase_config.js';
import { doc, getDoc } from 'firebase/firestore';

export const ProfilePointsSummary = ({ totalSales, totalPoints }) => (
<Card width="medium">
  <CardHeader gap="none" align="start" direction="column">
    {/* adjust level according to the correct 
    semantic heading level for your layout */}
    <Heading margin="none" level={2}>
      Points
    </Heading>
  </CardHeader>
  <CardBody>
    <NameValueList>
      <NameValuePair name="Total Sales">{totalSales}</NameValuePair>
      <NameValuePair name="Total Points">{totalPoints}</NameValuePair>
    </NameValueList>
  </CardBody>
</Card>
);

ProfilePointsSummary.propTypes = {
  totalSales: PropTypes.number.isRequired,
  totalPoints: PropTypes.number.isRequired,
};


export const ProfileDataTable = ({ designSystemDemo }) => {
  const [sales, setSales] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const fetchData = async () => {
    try {
      if (auth.currentUser) {
        const docRef = doc(firestore, 'sales-forms', auth.currentUser.uid);
        const docSnapshot = await getDoc(docRef);
        const docdata = docSnapshot.data();

        if (docdata) {
          const data = Object.keys(docdata).map((key) => {
            const doc = docdata[key];
            return {
              date: doc.date,
              OPE: doc.OPE,
              accountName: doc.accountName,
              businessUnit: doc.businessUnit,
              points: doc.points,
            };
          });

          const newTotalPoints = data.reduce((acc, entry) => acc + entry.points, 0);
          const newTotalSales = data.length;

          setSales(data);
          setTotalPoints(newTotalPoints);
          setTotalSales(newTotalSales);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array [] ensures that the effect runs only once on mount

  const columns = [
    { property: 'date', header: 'Date' },
    { property: 'OPE', header: 'OPE', primary: true },
    { property: 'accountName', header: 'Account Name' },
    { property: 'businessUnit', header: 'Business Unit' },
    { property: 'points', header: 'Points' },
  ];

  return (
    <>
      <ProfilePointsSummary totalSales={totalSales} totalPoints={totalPoints} ></ProfilePointsSummary>
      <br></br>
      <Heading
        id="my-sales-heading"
        level={3}
        margin={{ bottom: 'small', top: 'none' }}
      >
        My Sales
      </Heading>
      <Box
        height={designSystemDemo ? undefined : 'medium'}
        overflow="auto"
      >
        <DataTable
          aria-describedby="my-sales-heading"
          data={sales}
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

export default ProfileDataTable;
