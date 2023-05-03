import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const user = {
    login: 'valterbfreitasjr',
    avatar_url: 'https://avatars.githubusercontent.com/u/97262966?v=4',
    name: 'Valter B. Freitas Jr',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://devjuninho.com.br',
    location: 'Santo Anastácio - SP',
  };

  const repositories = [
    {
      name: 'Repositorie 1',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'JavaScript',
    },
    {
      name: 'Repositorie 2',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'PHP',
    },
    {
      name: 'Repositorie 3',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'C#',
    },
    {
      name: 'Repositorie 4',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Java',
    },
    {
      name: 'Repositorie 5',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Ruby',
    },
    {
      name: 'Repositorie 6',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'NodeJs',
    },
    {
      name: 'Repositorie 7',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Ruby',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
