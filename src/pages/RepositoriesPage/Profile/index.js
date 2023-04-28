import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/97262966?v=4" />
      <Login>Valter B. Freitas Jr.</Login>
      <Name>DevJuninho</Name>
    </Header>
  </Container>
);

export default Profile;
