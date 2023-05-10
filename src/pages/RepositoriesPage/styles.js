import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-wdith: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  min-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.carbonDark};
  width: 100%;
  flex: 100%;
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20p;
  }
`;
