import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
//
export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BackButton = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: #ffffff9c;
  cursor: pointer;
  width: 100px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  top: 5px;
  left: 100px;
  box-shadow: 1px -1px 20px 3px rgba(255, 254, 254, 0.5)
  position: absolute;
  transition: all 500ms;

  &:hover,
  &:focus {
    background-color: #ffffff;
    padding: 8px 0;
`;


export const UserProfileList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 1200px;
`;

export const LoadMoreButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: #fff;
  cursor: pointer;

  width: 200px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 10px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px;
  margin-top: 50px;

  box-shadow: -0.58px -0.13px 8.62px 3px rgba(255, 254, 254, 0.5);

  transition: all 500ms;

  &:hover{
    font-size: 22px;
    padding: 20px;
  }
`;


export const TweetDropdown = styled.div`
  display: none;
`;

export const TweetDropdownMenu = styled.div`
border-radius: 10px;
display: flex;
gap: 50px;
font-size: 24px;
text-transform: uppercase;
background-color: #4c54e485;
padding: 5px 20px;
color: white;
`;
export const DropdownItems = styled.div`
background-color: #ffe5e51c;
padding: 3px 10px;
border-radius: 10px;
cursor: pointer;
font-weight: 500;
transition: all 500ms;
&:hover{
    background-color: #ffe5e587;
    padding: 4px 12px;
}
`;


export const UserChoiceContainer = styled.div`
  right: 100px;
  top: 80px;
`;