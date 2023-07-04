import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#003c92",
  },
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
