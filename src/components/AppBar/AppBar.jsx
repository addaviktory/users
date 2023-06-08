import { Navigation } from 'components/Navigation/Navigation';
import { AppBarContainer, TitleLogo, TitleLink} from './AppBar.styled';
import titlelogo from './Images/logo.png';

export const AppBar = () => {
  return (
    <AppBarContainer>
        <TitleLink to="/">
        <TitleLogo src={titlelogo} alt="Title logo" />
        </TitleLink>
      <Navigation />
    </AppBarContainer>
  );
};