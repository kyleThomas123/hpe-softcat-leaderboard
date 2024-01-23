import { Button } from 'grommet';
import styled from 'styled-components';
import {
  Add,
  Ascend,
  Group,
  Support,
  UserAdd,
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
    cta: <StyledButton label="Launch" />,
    background: 'yellow',
    title: 'Assign Points',
    description: `Assign points to SoftCat resellers`,
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
      'Stay informed with how-to guides, resources, and documentation.',
    icon: <Support color="purple!" />,
  },
  {
    cta: 'Add a User',
    title: 'Add users ',
    description:
      'Add a user to participate in the leaderboard.',
    icon: <Group color="orange!" />,
  },
  {
    cta: 'Assign roles',
    title: 'Assign user access',
    description: 'Assign other users with admin access.',
    icon: <UserAdd color="yellow!" />,
  },
];
