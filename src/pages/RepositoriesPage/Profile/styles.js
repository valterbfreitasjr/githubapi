import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    alingn-items: center;
  } ;
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  } ;
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSize.title};
`;

export const Name = styled.h1`
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  } ;
`;
