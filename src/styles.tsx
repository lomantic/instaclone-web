import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  bgColor: "white",
  fontColor: "black",
  borderColor: "rgb(219, 219,219)",
};
export const darkTheme = {
  accent: "#0095f6",
  bgColor: "black",
  fontColor: "white",
  borderColor: "rgb(219, 219,219)",
};

export const ourTheme: DefaultTheme = {
  accent: "#0095f6",
  bgColor: "white",
  fontColor: "black",
  borderColor: "rgb(219, 219,219)",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  input{
    all: unset;
  }
  *{
    box-sizing: border-box;
  }
  body{
    background-color: ${(props) => props.theme.bgColor};
  }
  a{
    text-decoration: none;
  }

`;
