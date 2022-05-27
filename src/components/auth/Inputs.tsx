import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 10px 10px;
  background-color: #fafafa;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-top: 5px;
  box-sizing: border-box;
  &:placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: rgb(28, 28, 28);
  }
`;

export default Input;
