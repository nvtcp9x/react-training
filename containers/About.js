import React from 'react';
import { Link } from 'react-router-dom';

import Posts from './Posts';
import Counter from './Counter';
import PostsByUser from './PostsByUser';
import Button from '../styles';

const AboutButton = Button.extend`
  background: #bada55;
`;

const About = () => (
  <div>
    About
    <Link to="/">
      <AboutButton>Go Home</AboutButton>
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

export default About;
