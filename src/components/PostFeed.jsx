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
      username: 'Yoel the Hardon',
      avatarUrl: 'https://picsum.photos/id/1/50',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgV3dJAW5rOmw3TTh7mSx8AbmDCWICFjrhFCcqocXhfjIZ9F3NIFQ0P4WVymruBnkUME&usqp=CAU',
      caption: 'From last night #MADA!!!!',
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
        <Post
          key={post.id}
          username={post.username}
          avatarUrl={post.avatarUrl}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default PostFeed;