import React from 'react';

import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = ({ repository }) => (
  <Container color="orange">
    <Name>{repository.name}</Name>
    <Description>{repository.description}</Description>
    <Footer color="purple">
      <Lang>{repository.language}</Lang>
      <Link href={repository.url_html} target="_blank">
        DevJuninho
      </Link>
    </Footer>
  </Container>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url_html: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
