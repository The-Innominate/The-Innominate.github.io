import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Starfield from '../animations/Starfield';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Starfield />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export default Layout; 