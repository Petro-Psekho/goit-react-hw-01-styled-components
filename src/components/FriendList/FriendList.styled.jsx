import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin-bottom: 20px;
  padding: 5px 45px 5px 15px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
`;

export const Avatar = styled.img`
  padding: 10px 10px 5px 10px;
`;

export const StatusNetwork = styled.span`
  padding-bottom: 5px;
  color: ${props => `${props.colorStatus}`};
`;

export const FriendName = styled.p`
  font-family: 'Indie Flower', cursive;
  font-size: 35px;
  font-weight: 600;
  color: #364d68;
`;
