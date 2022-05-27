import styled from "styled-components";

const SButton = styled.input`
  margin-top: 15px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  font-weight: 600;
  width: 100%;
  border: none;
  padding: 9px 0px;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

function SubmitButton(props: any) {
  return <SButton {...props} />;
}
export default SubmitButton;
