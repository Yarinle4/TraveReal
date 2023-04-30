import React from 'react';
import { makeStyles } from '@mui/styles';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  feedContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
  },
}));

const PostFeed = () => {
  const classes = useStyles();
  const posts = [
    {
      id: 1,
      username: 'john_doe',
      avatarUrl: 'https://picsum.photos/id/1/50',
      imageUrl: 'https://picsum.photos/id/10/600/400',
      caption: 'Beautiful sunset at the beach #sunset #beach #vacation',
    },
    {
      id: 2,
      username: 'jane_doe',
      avatarUrl: 'https://picsum.photos/id/2/50',
      imageUrl: 'https://picsum.photos/id/20/600/400',
      caption: 'Yummy brunch with friends #brunch #friends #foodie',
    },
    {
      id: 3,
      username: 'jim_smith',
      avatarUrl: 'https://picsum.photos/id/3/50',
      imageUrl: 'https://picsum.photos/id/30/600/400',
      caption: 'Chilling by the pool #pool #relaxation #weekendvibes',
    },
  ];

  return (
    <div className={classes.feedContainer}>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;