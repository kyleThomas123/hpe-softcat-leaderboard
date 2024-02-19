import { Button } from 'grommet';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {
  Add,
  Ascend,
  Support,
} from 'grommet-icons';

// styled component to create custom orange button
const StyledButton = styled(Button)`
  background: ${props => props.theme.global.colors['orange!']};
  color: ${props => props.theme.global.colors['text-strong'].light};
  &:hover {
    background: ${props => props.theme.global.colors['orange!']};
    color: ${props => props.theme.global.colors['text-strong'].light};
  }
`;

export const data = [
  {
    cta: <Link to="/hpe-softcat-leaderboard/pointsform"><StyledButton label="Add points" /></Link>,
    background: 'yellow',
    title: 'Add Points',
    description: `Record your sales to get points`,
    descriptionColor: 'text-strong',
    icon: <Add color="plain" />,
  },
  {
    cta: 'View Leaderboard',
    title: 'View Leaderboard',
    description:
      'View the SoftCat Reseller Leaderboard.',
    icon: <Ascend color="green" />,
  },
  {
    cta: 'Explore guides',
    title: 'Guides and resources',
    description:
      'Stay informed with how-to guides and points explanation.',
    icon: <Support color="purple!" />,
  },

];
