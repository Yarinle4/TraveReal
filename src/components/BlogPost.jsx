import React, { useState, Fragment } from 'react';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
	Menu,
	MenuItem,
} from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditModal from './EditModal';

const Post = ({ post, deletePost, editPost, isLoggedIn }) => {
	const [openEditModal, setOpenEdit] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const onDeletePost = () => {
		const archivedAt = new Date();
		const newPost = {
			...post,
			archivedAt,
		};
		deletePost(newPost);
		handleClose();
	};

	const onToggleEdit = () => {
		// console.log('EditModal', post.id);
		setOpenEdit(true);
		handleClose();
	};

	const onCloseEditModal = () => {
		console.log('closeEditModal');
		setOpenEdit(false);
	};

	const createSubheader = () => {
		const subhider = !post.modifiedAt
			? `${post.createdAt.toDateString()} - ${post.createdAt.toLocaleTimeString()}`
			: `${post.modifiedAt.toDateString()} - ${post.modifiedAt.toLocaleTimeString()} (edited)`;
		return subhider;
	};

	return (
		<Fragment>
			<Card sx={{ margin: 5 }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: 'red' }} aria-label='about'>
							{post.avatar}
						</Avatar>
					}
					action={
						isLoggedIn && (
							<IconButton
								aria-label='actions'
								id='actions-button'
								aria-controls={openMenu ? 'actions' : undefined}
								aria-haspopup='true'
								aria-expanded={openMenu ? 'true' : undefined}
								variant='outlined'
								onClick={handleClick}
							>
								<MoreVert />
							</IconButton>
						)
					}
					title={post.title}
					subheader={createSubheader()}
					// subheaderTypographyProps={{ whiteSpace: 'pre' }}
					titleTypographyProps={{ fontWeight: 600, fontSize: '1rem' }}
				/>
				{post.image && (
					<CardMedia
						component='img'
						height='20%'
						image={post.image}
						alt={post.alt}
					/>
				)}
				<CardContent>
					<Typography
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: '3',
							WebkitBoxOrient: 'vertical',
						}}
						variant='body2'
						color='text.secondary'
					>
						{' '}
						{post.text}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<Checkbox
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite sx={{ color: 'red' }} />}
						/>
					</IconButton>
					<IconButton aria-label='share'>
						<Share />
					</IconButton>
				</CardActions>
			</Card>
			<Menu
				id='actions'
				aria-labelledby='actions-button'
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				placement='bottom-end'
			>
				<MenuItem onClick={onToggleEdit}>
					<ListItemDecorator>
						<Edit />
					</ListItemDecorator>{' '}
					Edit
				</MenuItem>
				<MenuItem onClick={onDeletePost} variant='soft' color='danger'>
					<ListItemDecorator sx={{ color: 'inherit' }}>
						<DeleteForever />
					</ListItemDecorator>{' '}
					Delete
				</MenuItem>
			</Menu>
			{openEditModal && (
				<EditModal
					post={post}
					editPost={editPost}
					isModalOpen={openEditModal}
					onCloseModal={onCloseEditModal}
				/>
			)}
		</Fragment>
	);
};

export default Post;