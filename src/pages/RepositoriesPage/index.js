import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main, Loading } from './styles';

import { getRepos, getUser, getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // userResponse = getUser('valterbfreitasjr');

      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };
    loadData();
  }, []);

  // const user = {
  //   login: 'valterbfreitasjr',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/97262966?v=4',
  //   name: 'Valter B. Freitas Jr',
  //   followers: 0,
  //   following: 0,
  //   company: null,
  //   blog: 'https://devjuninho.com.br',
  //   location: 'Santo Anastácio - SP',
  // };

  // const repositories = [
  //   {
  //     id: '1',
  //     name: 'Repositorie 1',
  //     description: 'Descrição',
  //     html_url: 'https://devjuninho.com.br',
  //     language: 'JavaScript',
  //   },
  //   {
  //     id: '2',
  //     name: 'Repositorie 2',
  //     description: 'Descrição',
  //     html_url: 'https://devjuninho.com.br',
  //     language: 'PHP',
  //   },
  //   {
  //     id: '3',
  //     name: 'Repositorie 3',
  //     description: 'Descrição',
  //     html_url: 'https://devjuninho.com.br',
  //     language: 'C#',
  //   },
  //   {
  //     id: '4',
  //     name: 'Repositorie 4',
  //     description: 'Descrição',
  //     html_url: 'https://devjuninho.com.br',
  //     language: 'Java',
  //   },
  //   {
  //     id: '5',
  //     name: 'Repositorie 5',
  //     description: 'Descrição',
  //     html_url: 'https://devjuninho.com.br',
  //     language: 'Ruby',
  //   },
  //   {
  //     id: '6',
  //     name: 'Repositorie 6',
  //     description: 'Descrição',
  //     html_url: 'https://devjuninho.com.br',
  //     language: 'NodeJs',
  //   },
  //   {
  //     name: 'Repositorie 7',
  //     description: 'Descrição',
  //     html_url: 'https://devjuninho.com.br',
  //     language: 'Ruby',
  //   },
  // ];

  // const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

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
