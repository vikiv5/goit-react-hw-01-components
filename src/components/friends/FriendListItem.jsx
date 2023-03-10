
import PropTypes from 'prop-types'

import {
    Friend,
    OnlineFriend,
    Img,
    Name,
  } from './FriendList.styled';

  export const FriendListItem =({avatar, name, isOnline})=> {
    return (
        <Friend>
    <OnlineFriend isOnline={isOnline} ></OnlineFriend>
<Img
      src={avatar}
      alt="User avatar" width="50px"
    />
    <Name>{name}</Name>
        </Friend>
    )
}
FriendListItem.propTypes = {
    avatar : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }
  