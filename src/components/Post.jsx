import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentForm: {

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
}));

const Post = ({ username, avatarUrl, imageUrl, caption, comments }) => {
  const classes = useStyles();
  const [likes, setLikes] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [postComments, setPostComments] = React.useState(comments || []);

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setPostComments((prevComments) => [
      ...prevComments,
      { username: 'Nadav Luvaton', text: comment },
    ]);
    setComment('');
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt={username} src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={username}
      />
      <CardContent>
        <p>{caption}</p>
      </CardContent>
      <div className={classes.actions}>
        <IconButton aria-label="like" onClick={handleLikeClick}>
          <FavoriteIcon color={likes > 0 ? 'error' : 'inherit'} />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleIcon />
        </IconButton>
      </div>
      <CardContent >
        <p>{likes} like{likes !== 1 ? 's' : ''}</p>
        <div>
          {postComments.map((comment, index) => (
            <p key={index}>
              <b>{comment.username}:</b> {comment.text}
            </p>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className={classes.commentForm}>
          <TextField
            label="Add a comment"
            variant="outlined"
            size="small"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <Button type="submit" variant="contained" size="small">
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Post;
