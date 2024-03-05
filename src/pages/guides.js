import React from 'react';
import { Accordion, AccordionPanel, Box, Text, Heading, List } from 'grommet';

// const Guides = () => {
//     return <Box direction="column" gap="medium">
//                 <div>
//                     <Text size="3xl">Welcome to our Sales Incentives Leaderboard platform!</Text>
//                     <Paragraph> Where excellence in sales is not only recognized but also rewarded! This user guide will walk you through the exciting features and easy-to-use functionalities of our system, designed to motivate and celebrate your outstanding sales achievements.</Paragraph>

//                     <h2>Getting Started: </h2>
//                     <p>To begin your journey on the Sales Incentives Leaderboard, simply log in to your account. If you're a new user, follow the straightforward registration process to create your profile. Once logged in, you'll find a user-friendly dashboard where you can easily navigate through the various sections.</p>

//                     <h2>Adding Your Sales:</h2>
//                     <p>Navigate to the "Submit Sales" section to input your sales data. Here, you can enter relevant details such as the OPE, the account name, and the business unit. As you submit each sale, our system will automatically convert the sales data into points, reflecting your contribution to the overall success of the team.</p>

//                     <h2>Leaderboard and Points Accumulation:</h2>
//                     <p>The heart of our platform lies in the dynamic leaderboard, showcasing the top performers based on accumulated points. Points are assigned based on your sales, giving you a fair and transparent measure of your success. Keep an eye on the leaderboard to track your progress and see how you compare to your colleagues.</p>

//                     <h2>Competition and Rewards:</h2>
//                     <p>As the competition heats up, so do the rewards! The individual with the highest points at the end of the designated period will be crowned the Sales Champion and will receive an exciting prize as a token of appreciation for their hard work and dedication.</p>
                    
//                     <h2>Conclusion:</h2>
//                     <p>We are thrilled to have you on board, and we can't wait to witness your success on our Incentives Leaderboard. Let the friendly competition and rewards drive you to new heights in your sales journey. If you have any questions or need assistance, reach out to your HPE Partner. Good luck, and may the highest sales and points lead you to victory! </p>
//                 </div>;
//             </Box>
//   };

// import React from 'react';
// import { Accordion, AccordionPanel, Box } from 'grommet';

export const Guides = ({ ...rest }) => {
  const pad = 'small';

  return (
    <Box width={{ max: 'xlarge' }} margin="auto" fill>
        <Heading level={1}>Welcome to our Sales Incentives Leaderboard platform!</Heading>
        <Text> Where excellence in sales is not only recognized but also rewarded! This user guide will walk you through the exciting features and easy-to-use functionalities of our system, designed to motivate and celebrate your outstanding sales achievements.</Text>

        <br></br>
        <Accordion {...rest}>
            <AccordionPanel label={<Heading level={2}>Getting Started</Heading>}>
                <Box pad={pad}>
                    <Text>
                        To begin your journey on the Sales Incentives Leaderboard, simply log in to your account. If you're a new user, follow the straightforward registration process to create your profile. Once logged in, you'll find a user-friendly dashboard where you can easily navigate through the various sections. If you forget your password get in touch with your HPE partner.
                    </Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label={<Heading level={2}>Adding Your Sales</Heading>}>
                <Box pad={pad}>
                    <Text>
                    Navigate to the "Submit Sales" section to input your sales data. Here, you can enter relevant details such as the OPE, the account name, and the business unit. As you submit each sale, our system will automatically convert the sales data into points, reflecting your contribution to the overall success of the team.
                    </Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label={<Heading level={2}>Points Calculation</Heading>}>
                <Box pad={pad}>
                    <Text>
                        Our system values different sales scenarios based on whether you are selling to existing or new HPE customers and whether you are introducing new business lines. Here's a breakdown of how points are assigned:
                    </Text>
                    <Heading level={3}>Existing HPE Customer:</Heading>
                        <Text>Value: 1 point</Text>
                        <Text>Example: </Text>
                        <List data = {["If you sell to an existing HPE customer, such as a refresh of their storage, you earn 1 point for that transaction."]}></List>
                        
                    <Heading level={3}>New HPE Customer or New Business Line within an Existing Customer:</Heading>

                        <Text>Value: 2 points</Text>
                        <Text>Examples: </Text>
                        <List data = {[
                            "Selling to a new HPE customer, like a storage purchase, awards you 2 points.",
                            "If an existing HPE customer refreshes their storage and adds a new software (a new business line), you also earn 2 points for that transaction."
                        ]}></List>
                    
                    <Heading level={3}>Multiple Business Lines to a Singular Customer:</Heading>

                        <Text>Multiplier: Points will be multiplied by 1.5</Text>
                        <Text>Examples:</Text>
                        <List data = {[
                            "If an existing HPE customer refreshes their storage and adds a new software (1 + 2 points), your points will be multiplied by 1.5, resulting in 4.5 points.",
                            "Selling to a new HPE customer buying both storage and software (2 points) will be multiplied by 1.5, resulting in 3 points."
                        ]}>
                        </List>

                    
                </Box>
            </AccordionPanel>
            <AccordionPanel label={<Heading level={2}>Leaderboard and Points Accumulation</Heading>}>
                <Box pad={pad}>
                    <Text>
                    The heart of our platform lies in the dynamic leaderboard, showcasing the top performers based on accumulated points. Points are assigned based on your sales, giving you a fair and transparent measure of your success. Keep an eye on the leaderboard to track your progress and see how you compare to your colleagues.
                    </Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label={<Heading level={2}>Competition and Rewards</Heading>}>
                <Box pad={pad}>
                    <Text>
                        As the competition heats up, so do the rewards! The individual with the highest points at the end of the designated period will be crowned the Sales Champion and will receive an exciting prize as a token of appreciation for their hard work and dedication.
                    </Text>
                </Box>
            </AccordionPanel>
        </Accordion>
        <br></br>
        <Text> We are thrilled to have you on board, and we can't wait to witness your success on our Incentives Leaderboard. Let the friendly competition and rewards drive you to new heights in your sales journey. If you have any questions or need assistance, reach out to your HPE Partner.</Text>
        <br></br>
        <Text>  Good luck, and may the highest sales and points lead you to victory! </Text>
    </Box>
  );
};

  
  export default Guides;