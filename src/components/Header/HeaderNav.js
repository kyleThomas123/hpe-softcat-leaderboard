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
import { AddCircle, HelpOption, HomeRounded, User, BladesVertical } from 'grommet-icons';
import { auth } from "../../firebase_config"
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";



export const HeaderNav = () => {
  const size = useContext(ResponsiveContext);
  const user = auth.currentUser;
  const [open, setOpen] = useState();

  if (user) {
    return <Nav align="center" direction="row" gap="small">
      {!['xsmall', 'small'].includes(size) && (
        <>
          <Link to="/"><Button icon={<HomeRounded />} a11yTitle="Home" title="Home" /></Link>
          <Link to="/PointsForm"><Button icon={<AddCircle />} a11yTitle="Submit Sales" title="Submit Sales" /></Link>
          <Link to="/Leaderboard"><Button icon={<BladesVertical />} a11yTitle="Home" title="Home" /></Link>
          <Link to="/Guides"><Button icon={<HelpOption />} a11yTitle="Help" title="Help" /></Link>
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
  } 

};

export const TextEmphasis = ({ ...rest }) => {
    return <Text weight={500} color="text-strong" {...rest} />;
  };


const UserDetails = () => {
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
        <Button label="My Profile" onClick={() => navigate("/Profile")}/>
        <Button label="Sign Out" onClick={() => signOut(auth).then(navigate("/SignIn"))} />
      </Box>
    </Box>
  );
};

export default HeaderNav