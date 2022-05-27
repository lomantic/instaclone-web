import styled from "styled-components";

const SAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: "#2c2c2c";
`;

function Avatar({ url = "" }) {
  return <SAvatar></SAvatar>;
}

export default Avatar;
