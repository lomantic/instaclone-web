import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  bgColor: "#ffffff",
  fontColor: "#3a3232",
  borderColor: "rgb(219, 219,219)",
};
export const darkTheme = {
  accent: "#0095f6",
  bgColor: "#3a3232",
  fontColor: "#ffffff",
  borderColor: "rgb(219, 219,219)",
};

export const ourTheme: DefaultTheme = {
  accent: "#0095f6",
  bgColor: "#ffffff",
  fontColor: "#3a3232",
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
    color:  ${(props) => props.theme.fontColor};
  } 
  
  a{
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

`;
