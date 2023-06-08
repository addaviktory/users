import { HomeTitle, HomeTitleBox, FriendImage} from './HomePage.styled';
import friendsImage from './Images/imageHomePage.png';

export const HomePage = () => {
  return (
    <HomeTitleBox>
      <HomeTitle>Welcome to the world of our app, where you can follow interesting people.</HomeTitle>
      <FriendImage src={friendsImage} alt="friends image" />
      
    </HomeTitleBox>
  );
};