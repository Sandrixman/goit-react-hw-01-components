import styled from '@emotion/styled';

export const Friend = styled.li`
  width: 400px;
  margin: 20px auto;
  border-radius: 10px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
`;

export const Status = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 15px;

  background-color: ${props => {
    switch (props.status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return '#fff';
    }
  }};
`;

export const FriendImg = styled.img`
  width: 64px;
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;
