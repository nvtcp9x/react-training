import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

type Props = {
  posts: Array<Object>,
};

const Posts = ({ posts }: Props) => (
  <div>
    <h3>Posts</h3>
    <ul>{posts.map(post => <li key={post.id}>{`${post.title} - ${post.user.first} ${post.user.last}`}</li>)}</ul>
  </div>
);

const makeGetPosts = () =>
  createSelector(
    (state, props) => props.user,
    state => state.postsById,
    state => state.usersById,
    state => state.postListing,
    (userId, posts, users, listing) =>
      listing.filter(id => posts[id].author === userId).map(id => {
        const post = posts[id];
        return { ...post, user: users[post.author] };
      })
  );

const mapStateToProps = () => {
  const getPosts = makeGetPosts();

  return (state, ownProps) => ({
    posts: getPosts(state, ownProps),
  });
};

export default connect(mapStateToProps)(Posts);
