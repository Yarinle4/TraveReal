import React from 'react';
import { makeStyles } from '@mui/styles';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  feedContainer: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  post: {
    marginBottom: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up(3)]: {
      maxWidth: 600,
    },
  },
}));

const PostFeed = () => {
  const classes = useStyles();
  const posts = [
    {
      id: 1,
      username: 'Tourist123',
      avatarUrl: 'https://picsum.photos/id/1/50',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtG2Vs54jqsYi5CDzNu_Tl4dKxW9I9tdCMA&usqp=CAU',
      caption: 'Home made cooking class #Mafrum #Lahoh',
    },
    {
      id: 2,
      username: 'Traveler_6',
      avatarUrl: 'https://picsum.photos/id/2/50',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPIDcGedjz2btGNezBme1P5GPb6tL0R3cmA&usqp=CAU',
      caption: 'Yummy brunch with new friends #brunch #friends #TRAVELREAL',
    },
    {
      id: 3,
      username: 'jim_smith',
      avatarUrl: 'https://picsum.photos/id/3/50',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGwI2Sww60oOTeGO5usWbNfrzxzwlJRPnDA&usqp=CAU',
      caption: 'We found the coolest hidden winery #relaxation #weekendvibes',
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
          className={classes.post}
          
        />
      ))}
    </div>
  );
};

export default PostFeed;
