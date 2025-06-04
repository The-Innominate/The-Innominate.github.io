import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.secondary};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${theme.transitions.default};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accent};
  }

  /* Selection */
  ::selection {
    background: ${theme.colors.secondary};
    color: ${theme.colors.background};
  }

  /* Focus outline */
  :focus {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }

  /* Remove focus outline for mouse users */
  :focus:not(:focus-visible) {
    outline: none;
  }
`; 