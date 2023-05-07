import React from "react";
import { makeStyles } from "@mui/styles";
import Post from "./Post";
import foodPic from "../assets/wineFun.png";
import falafelPic from "../assets/falafel.png";

import boysPic from "../assets/boys.png";

const useStyles = makeStyles((theme) => ({
  feedContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(2),
  },
  post: {
    marginBottom: theme.spacing(2),
    width: "100%",
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
      username: "Tourist123",
      avatarUrl: "https://picsum.photos/id/1/50",
      imageUrl: falafelPic,
      caption: "we had the best Israely FALAFEL!! #FALAFEL #SO_GOOOOOD",
    },
    {
      id: 2,
      username: "Traveler_6",
      avatarUrl: "https://picsum.photos/id/2/50",
      imageUrl: boysPic,
      caption: "Beer with my boys! #brunch #friends #TRAVELREAL",
    },
    {
      id: 3,
      username: "jim_smith",
      avatarUrl: "https://picsum.photos/id/3/50",
      imageUrl: foodPic,
      caption: "We found the coolest hidden winery #relaxation #weekendvibes",
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
