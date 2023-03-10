import PropTypes from 'prop-types';

import {
    Container,
    UserInfo,
    Tag,
    Location,
    Img,
    Name,
    SpanInfo,
    SpanQuantity,
    LiInfo,
  } from './Profile.styled';

  function Profile({ location, avatar, username, tag, stats }) {
    return (
        <Container>
        <div>
  
    <Img
      src={avatar}
      alt="User avatar" width="100px"
    />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </div>

  <UserInfo>
    <LiInfo>
      <SpanInfo>Followers</SpanInfo>
      <SpanQuantity>{stats.followers}</SpanQuantity>
    </LiInfo>
    <LiInfo>
      <SpanInfo>Views</SpanInfo>
      <SpanQuantity>{stats.views}</SpanQuantity>
    </LiInfo>
    <LiInfo>
      <SpanInfo>Likes</SpanInfo>
      <SpanQuantity>{stats.likes}</SpanQuantity>
    </LiInfo>
  </UserInfo>

</Container>);
  }

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };

  export default Profile ;