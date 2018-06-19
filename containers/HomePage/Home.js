import React from 'react';
import { Link } from 'react-router-dom';

import Posts from '../Posts/Posts';
import Counter from '../Counter/Counter';
import PostsByUser from '../PostsByUser/PostsByUser';
import Button from '../../styles';

const HomeButton = Button.extend`
  background: #bada55;
`;

const Home = () => (
  <div>
    Home
    <Link to="/about">
      <HomeButton>Go about Page</HomeButton>
    </Link>
    <h1>Reselect Redux</h1>
    <Posts />
    <Counter />
    <h2>User 1</h2>
    <PostsByUser user="user-1" />
    <h2>User 2</h2>
    <PostsByUser user="user-2" />
  </div>
);

export default Home;
