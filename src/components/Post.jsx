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
}));

const Post = ({ username, avatarUrl, imageUrl, caption }) => {
  const classes = useStyles();
  const [likes, setLikes] = React.useState(0);

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
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
      <CardContent>
        <p>{likes} like{likes !== 1 ? 's' : ''}</p>
        <div>
          {/* Render comment section here */}
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;