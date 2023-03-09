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

  export default Profile ;