import PropTypes from 'prop-types';
import { networkStatus } from 'components/utils/networkStatus';
import { colorStatus } from 'components/utils/colorStatus';

import {
  Friends,
  FriendsItem,
  Wrapper,
  Avatar,
  StatusNetwork,
  FriendName,
} from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem key={id}>
          <Wrapper>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <StatusNetwork colorStatus={colorStatus(isOnline)}>
              {networkStatus(isOnline)}
            </StatusNetwork>
          </Wrapper>
          <FriendName>{name}</FriendName>
        </FriendsItem>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
