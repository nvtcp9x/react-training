// @flow

import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import styled from 'styled-components';

type Props = {
  posts: Array<any>,
};

const ListPost = styled.li`
  background: ${props => (parseInt(props.title.slice(-1)) % 2 === 0 ? 'yellow' : 'green')};
  color: ${props => (parseInt(props.title.slice(-1)) % 2 === 0 ? 'green' : 'yellow')};
`;

const Posts = ({ posts }: Props) => (
  <div>
    <h3>Posts</h3>
    <ul>
      {posts.map(post => (
        <ListPost title={post.title} key={post.id}>{`${post.title} - ${post.user.first} ${post.user.last}`}</ListPost>
      ))}
    </ul>
  </div>
);

const getListing = createSelector(
  state => state.postsById,
  state => state.usersById,
  state => state.postListing,
  (posts, users, listing) =>
    listing.map(id => {
      const post = posts[id];
      return { ...post, user: users[post.author] };
    })
);

const mapStateToProps = state => ({
  posts: getListing(state),
});

export default connect(mapStateToProps)(Posts);
