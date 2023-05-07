import React from "react";
import { makeStyles } from "@mui/styles";
import Post from "./Post";
import foodPic from "../assets/food.png";

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
      imageUrl:
        "https://media-cdn.tripadvisor.com/media/photo-s/14/75/0c/44/beers-and-friends.jpg",
      caption: "From last night #MADA!!!",
    },
    {
      id: 2,
      username: "Traveler_6",
      avatarUrl: "https://picsum.photos/id/2/50",
      imageUrl:
        "https://www.shutterstock.com/image-photo/people-leisure-friendship-technology-concept-260nw-490626616.jpg",
      caption: "Yummy brunch with friends #brunch #friends #foodie",
    },
    {
      id: 3,
      username: "jim_smith",
      avatarUrl: "https://picsum.photos/id/3/50",
      imageUrl: "https://c.stocksy.com/a/9pT400/z9/1067959.jpg",
      caption: "Chilling by the pool #pool #relaxation #weekendvibes",
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
