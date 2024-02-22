// HeaderNav.js
import React, { useContext, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  DropButton,
  Nav,
  ResponsiveContext,
  Text,
} from 'grommet';
import { HelpOption, HomeRounded, User } from 'grommet-icons';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



export const HeaderNav = () => {
  const size = useContext(ResponsiveContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const [open, setOpen] = useState();
  const navigate = useNavigate();

  if (user) {
    return <Nav align="center" direction="row" gap="small">
      {!['xsmall', 'small'].includes(size) && (
        <>
          <Button icon={<HelpOption />} a11yTitle="Help" title="Help" />
          <Button icon={<HomeRounded />} a11yTitle="Home" title="Home" />
        </>
      )}
      <DropButton
        dropContent={<UserDetails />}
        dropProps={{ align: { top: 'bottom', right: 'right' } }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Avatar background="dark-1">
            <User></User>
        </Avatar>
      </DropButton>
    </Nav>
  } else {
    <Nav align="center" direction="row" gap="small">
    {!['xsmall', 'small'].includes(size) && (
      <>
        <Button icon={<HelpOption />} a11yTitle="Help" title="Help" />
        <Button icon={<HomeRounded />} a11yTitle="Home" title="Home" />
      </>
    )}
    <DropButton
      onClick={() => navigate("/SignIn")}
    >
      <Avatar background="dark-1">
          <User></User>
      </Avatar>
    </DropButton>
  </Nav>
  }

};

export const TextEmphasis = ({ ...rest }) => {
    return <Text weight={500} color="text-strong" {...rest} />;
  };


const UserDetails = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  return (
    <Box width="medium">
      <Box pad="medium" direction="row" gap="small">

        <Box pad={{ vertical: 'small' }}>
          <TextEmphasis size="large">
            {`${user.displayName}`}
          </TextEmphasis>
          <Text size="small">{user.email}</Text>
        </Box>
      </Box>
      <Box
        border={{
          side: 'top',
          color: 'border-weak',
        }}
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: 'xsmall', vertical: 'small' }}
      >
        <Button label="My Profile" />
        <Button label="Sign Out" onClick={() => signOut(auth).then(navigate("/SignIn"))} />
      </Box>
    </Box>
  );
};

export default HeaderNav