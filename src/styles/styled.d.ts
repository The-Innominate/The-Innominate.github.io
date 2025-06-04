import 'styled-components';

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
      };
      fontWeight: {
        normal: number;
        medium: number;
        bold: number;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
  }
} 