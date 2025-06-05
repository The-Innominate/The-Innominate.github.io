import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from '../Footer';
import Starfield from '../Starfield';

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
  padding-top: 80px; // Adjust based on your header height
`;

export default Layout; 