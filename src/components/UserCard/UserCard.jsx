import goItLogo from './Images/logo.png';
import titlePicture from './Images/logoUserCard.png';
import {
  UserCardContainer,
  CompanyLogo,
  TitleImg,
  UserLines,
  UserLogoContainer,
  UserLogoImg,
  TweetsPrg,
  FollowersPrg,
  FollowButton,
  UserNamePrg,
} from './UserCard.styled';

export const UserCard = ({
  userName,
  avatar,
  tweets,
  followers,
  following,
  handleFollow,
}) => {
  return (
    <UserCardContainer>
      <CompanyLogo src={goItLogo} alt="Company logo" />
      <TitleImg src={titlePicture} alt="Title picture" />

      <UserLines></UserLines>
      <UserLogoContainer>
        <UserLogoImg src={avatar} alt="user logo" />
      </UserLogoContainer>

      <UserNamePrg>{userName}</UserNamePrg>
      <TweetsPrg>
        {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Tweets
      </TweetsPrg>
      <FollowersPrg>
        {following
          ? (followers + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          : followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        Followers
      </FollowersPrg>
      <FollowButton
        bgColor={following ? '#5CD3A8' : '#ebd8ff'}
        hoverColor={following ? '#a5ffdfd6' : '#fff'}
        onClick={() => {
          handleFollow(userName);
        }}
      >
        {following ? 'Following' : 'Follow'}
      </FollowButton>
    </UserCardContainer>
  );
};