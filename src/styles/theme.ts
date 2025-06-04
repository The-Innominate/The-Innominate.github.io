import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textSecondary: string;
      electricBlue: string;
      accentPurple: string;
      starColor: string;
      starGlow: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    typography: {
      fontSize: {
        small: string;
        body: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
      fontWeight: {
        normal: number;
        medium: number;
        bold: number;
      };
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    background: '#0a0a0a',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    electricBlue: '#00f3ff',
    accentPurple: '#C2AFF0',
    starColor: '#fff8e1',
    starGlow: '#ffb86b'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  typography: {
    fontSize: {
      small: '0.875rem',
      body: '1rem',
      h1: '3.5rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1rem'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700
    }
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
    large: '0 8px 16px rgba(0, 0, 0, 0.3)'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  }
};

export default theme; 