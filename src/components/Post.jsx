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
    minWidth: 285,
    maxWidth: 285,
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
      {
        
        username: username,
        text: comment,
        avatarUrl: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg' // Add the avatar URL here
        
      },
    ]);
    setComment('');
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar  style={{ marginLeft: '-12px' }} sx={{ width: 35, height: 35 }} alt={username} src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        titleTypographyProps={{variant:'h5' }}

        
      />
      <CardMedia className={classes.media} image={imageUrl} title={username} />
      <CardContent>
        <p style={{ marginLeft:'-10px'}} >{caption}</p>
      </CardContent>
      <div className={classes.actions}>
        <div style={{ display: 'flex' }}>
          <IconButton style={{ marginTop: '-10px' }} aria-label="like" onClick={handleLikeClick}>
            <FavoriteIcon color={likes > 0 ? 'error' : 'inherit'} />
          </IconButton>
          <p style={{ marginLeft: '4px' }}>
            {likes} like{likes !== 1 ? 's' : ''}
          </p>
        </div>
        <IconButton aria-label="comment">
          <ChatBubbleIcon />
        </IconButton>
      </div>
      <CardContent>
      <div style={{ marginLeft: '-13px'}}>
      {postComments.map((comment, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <Avatar sx={{ width: 26, height: 26 }} alt={comment.username} src={comment.avatarUrl} style={{marginTop: '-10px', marginRight: '10px' }} />
        <p >
        <b>{comment.username}: </b>{comment.text}
        </p>
      </div>
))}
        </div >
        
        <form onSubmit={handleCommentSubmit} className={classes.commentForm}>
          <TextField
            style={{marginLeft: '-10px'}}
            label="Add a comment"
            variant="outlined"
            size="small"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <Button
            style={{ fontSize: '14px' }}
            type="submit"
            variant="contained"
            size="small"
          >
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Post;
