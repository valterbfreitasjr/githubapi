import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = () => (
  <Container color="orange">
    <Name> Repo Name</Name>
    <Description>Repo Descrip.</Description>
    <Footer color="purple">
      <Lang>Repo Lang</Lang>
      <Link href="https://devjuninho.com.br" target="_blank">
        DevJuninho
      </Link>
    </Footer>
  </Container>
);

export default Repository;
