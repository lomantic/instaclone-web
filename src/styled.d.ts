import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accent: string;
    bgColor: string;
    fontColor: string;
    borderColor: string;
  }
}
