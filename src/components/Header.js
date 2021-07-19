import React from 'react';
import Typed from 'react-typed';
import { Box, makeStyles, Typography, Grid, Avatar } from '@material-ui/core';
import avatar from '../avatar.jpg';

const useStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: theme.spacing(1),
	},
	title: {
		color: theme.palette.secondary.main,
	},
	subtitle: {
		color: theme.palette.secondary.dark,
		textTransform: 'uppercase',
	},
	typedContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '100%',
		textAlign: 'center',
		zIndex: 1,
	},
	textContainer: {
		backgroundColor: theme.palette.primary.main,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar className={classes.avatar} src={avatar} alt="Keith Cheong" />
			</Grid>
			<Grid className={classes.textContainer}>
				<Typography className={classes.title} variant="h4">
					<Typed strings={['Keith Cheong']} typeSpeed={40} />
				</Typography>
				<Typography className={classes.subtitle} variant="h5">
					<Typed
						strings={[
							'Frontend Developer',
							'Backend Developer',
							'Fullstack Developer',
						]}
						typeSpeed={40}
						backDelay={1000}
						backSpeed={50}
						loop
					/>
				</Typography>
				<Typography style={{ color: 'white' }}>
					Still WIP (Don't judge)
				</Typography>
			</Grid>
		</Box>
	);
};

export default Header;
