import styled from "styled-components";
import { BaseBox } from "../sharedStyles";

const Container = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 25px;
  margin-bottom: 10px;

  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

function FormBox({ children }: any) {
  return <Container>{children}</Container>;
}

export default FormBox;
