import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

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
      id: '1',
      name: 'Repositorie 1',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repositorie 1',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'PHP',
    },
    {
      id: '3',
      name: 'Repositorie 1',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'C#',
    },
    {
      id: '4',
      name: 'Repositorie 1',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Java',
    },
    {
      id: '5',
      name: 'Repositorie 1',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Ruby',
    },
    {
      id: '6',
      name: 'Repositorie 1',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Node.Js',
    },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
