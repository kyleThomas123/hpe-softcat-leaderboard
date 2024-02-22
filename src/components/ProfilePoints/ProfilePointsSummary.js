 // ProfilePointsSummary.js
import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  NameValueList,
  NameValuePair,
  Text,
} from 'grommet';

const cardSummaryData = {
    'Total Sales': 7,
    'Total Points': 26,
  };


export const ProfilePointsSummary = () => (
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
        {Object.entries(cardSummaryData).map(([name, value]) => (
          <NameValuePair key={name} name={name}>
            {value}
          </NameValuePair>
        ))}
      </NameValueList>
    </CardBody>
  </Card>
);
