import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfiles } from 'redux/operations';
import { selectUsersProfiles } from 'redux/selectors';
import { BsArrowLeft } from 'react-icons/bs';

import {
  UserProfileList,
  LoadMoreButton,
  UserProfileContainer,
  TweetDropdown,
  TweetDropdownMenu,
  UserChoiceContainer,
  BackButton,
} from './TweetsPage.styled';
import { UserCard } from 'components/UserCard/UserCard';

const DropdownItem = ({ item, activeItem, handleItemClick }) => (
  <div
    className={`dropdown-item ${activeItem === item ? 'custom-active-item' : ''}`}
    onClick={() => handleItemClick(item)}
  >
    {item.label}
  </div>
);

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const userProfiles = useSelector(selectUsersProfiles);
  const [page, setPage] = useState(1);
  const [displayedProfiles, setDisplayedProfiles] = useState([]);
  const [paginationLength, setPaginationLength] = useState([]);
  const [followingUsers, setFollowingUsers] = useState(
    localStorage.getItem('followingUsers')
      ? JSON.parse(localStorage.getItem('followingUsers'))
      : []
  );
  const [activeItem, setActiveItem] = useState(null);
  const profilesPerPage = 3;
  const options = [
    { value: 'showAll', label: 'Show All' },
    { value: 'follow', label: 'Follow' },
    { value: 'following', label: 'Following' },
  ];

  useEffect(() => {
    dispatch(fetchUserProfiles());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (page - 1) * profilesPerPage;
    const endIndex = startIndex + profilesPerPage;
    const newDisplayedProfiles = userProfiles
      .slice(0, endIndex)
      .map(userProfile => {
        if (followingUsers.includes(userProfile.user)) {
          return { ...userProfile, following: true };
        } else {
          return { ...userProfile, following: false };
        }
      });

    const newPaginationLength = userProfiles.map(userProfile => {
      if (followingUsers.includes(userProfile.user)) {
        return { ...userProfile, following: true };
      } else {
        return { ...userProfile, following: false };
      }
    });

    if (activeItem && activeItem.value === 'follow') {
      const changedDisplayedProfiles = newDisplayedProfiles.filter(
        userProfile => userProfile.following === false
      );
      setPaginationLength(prevState => [
        ...newPaginationLength.filter(userProfile => userProfile.following === false),
      ]);
      setDisplayedProfiles(prevProfiles => [...changedDisplayedProfiles]);
      return;
    } else if (activeItem && activeItem.value === 'following') {
      const changedDisplayedProfiles = newDisplayedProfiles.filter(
        userProfile => userProfile.following === true
      );
      setPaginationLength(prevState =>
        newPaginationLength.filter(userProfile => userProfile.following === true)
      );
      setDisplayedProfiles(prevProfiles => [...changedDisplayedProfiles]);
      return;
    } else {
      setPaginationLength(prevState => newPaginationLength);
      setDisplayedProfiles(prevProfiles => [...newDisplayedProfiles]);
    }
  }, [userProfiles, page, followingUsers, activeItem]);

  const handleFollow = userName => {
    setFollowingUsers(prevState => {
      let updatedFollowingUsers;
      if (prevState.includes(userName)) {
        updatedFollowingUsers = prevState.filter(user => user !== userName);
      } else {
        updatedFollowingUsers = [...prevState, userName];
      }
      localStorage.setItem('followingUsers', JSON.stringify(updatedFollowingUsers));
      return updatedFollowingUsers;
    });
  };

  const handleItemClick = item => {
    setActiveItem(item);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <UserProfileContainer>
      <UserChoiceContainer>
        <BackButton to="/">
          <BsArrowLeft width={20} height={20} />
          Back
        </BackButton>
      </UserChoiceContainer>

      <TweetDropdown>
        {activeItem ? activeItem.label : 'Select an option'}
      </TweetDropdown>

      <TweetDropdownMenu>
        {options.map(item => (
          <DropdownItem
            key={item.value}
            item={item}
            activeItem={activeItem}
            handleItemClick={handleItemClick}
          />
        ))}
      </TweetDropdownMenu>

      <UserProfileList>
        {displayedProfiles.map(userProfile => (
          <li key={userProfile.id}>
            <UserCard
              userName={userProfile.user}
              avatar={userProfile.avatar}
              tweets={userProfile.tweets}
              followers={userProfile.followers}
              following={userProfile.following}
              handleFollow={handleFollow}
            />
          </li>
        ))}
      </UserProfileList>

      {paginationLength.length > displayedProfiles.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      )}
    </UserProfileContainer>
  );
};