import styled from "styled-components";

const SSeparator = styled.div`
  margin: 10px 0px 20px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    background-color: ${(props) => props.theme.borderColor};
    height: 2px;
    width: 100%;
  }
  span {
    padding: 0px 10px;
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div></div>
      <span>Or</span>
      <div></div>
    </SSeparator>
  );
}

export default Separator;
