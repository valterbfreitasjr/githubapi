import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      name: 'Repositorie 2',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'PHP',
    },
    {
      id: '3',
      name: 'Repositorie 3',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'C#',
    },
    {
      id: '4',
      name: 'Repositorie 4',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Java',
    },
    {
      id: '5',
      name: 'Repositorie 5',
      description: 'Descrição',
      html_url: 'https://devjuninho.com.br',
      language: 'Ruby',
    },
    {
      id: '6',
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

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
