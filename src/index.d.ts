declare module '*.jpg';
declare module '@theme/typography' {
  export interface TypographyType {
    fontFamily: {
      regular: string;
      bold: string;
    };
    sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    weights: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
      black: number;
    };
  }

  export const typography: TypographyType;
}

declare module '@theme/radius' {
  export interface RadiusType {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    full: number;
  }

  export const radius: RadiusType;
}

declare module '@theme/spacing' {
  export interface SpacingType {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }
  export const spacing: SpacingType;
}

declare module '@theme/colors' {
  export interface ColorsType {
    background: string;
    backgroundSecondary: string;

    primary: string;
    primaryDark: string;

    accent: string;
    accentDark: string;

    text: string;
    textSecondary: string;

    card: string;
    border: string;

    textInput: {
      border: string;
    };

    iconsColor: {
      white: string;
    };

    buttonColor: {
      primary: string;
      secondary: string;
      text: {
        white: string;
        black: string;
        gray: string;
      };
    };
  }

  export const colors: ColorsType;
  export type ButtonVariant = 'primary' | 'secondary';
}

declare module '@screens/*';
