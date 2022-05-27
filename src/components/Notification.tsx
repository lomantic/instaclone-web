import styled from "styled-components";

const SNotification = styled.span`
  color: #5cd131;
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0px;
`;

function Notification({ message }: any) {
  return message === "" || !message ? null : (
    <SNotification> {message}</SNotification>
  );
}

export default Notification;
