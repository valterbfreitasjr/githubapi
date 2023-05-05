import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Repository from './Repository';

const Repositories = ({ repositories }) => {
  const repo = repositories.map((repository) => (
    <Repository key={repository.id} repository={repository} />
  ));
  return <Container>{repo}</Container>;
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url_html: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Repositories;
