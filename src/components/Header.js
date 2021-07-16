import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import dayjs from 'dayjs';
import { Box, Typography, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
	content: {
		color: 'white',
	},
	typedContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '100vw',
		textAlign: 'center',
		zIndex: 1,
	},
	textContainer: {
		backgroundColor: theme.palette.primary.main,
	},
}));

const Header = () => {
	const classes = useStyles();
	const [age, setAge] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setAge(dayjs().diff(dayjs('1996-11-02'), 'year', true));
		});

		return () => clearInterval(interval);
	}, []);

	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar className={classes.avatar} src={avatar} alt="Keith Cheong" />
			</Grid>
			<Grid className={classes.textContainer}>
				<Typography className={classes.title} variant="h4">
					<Typed
						strings={[
							'Keith Cheong',
							`${age.toPrecision(12)} Years Old, Human`,
						]}
						typeSpeed={40}
						backDelay={5000}
						backSpeed={50}
						loop
					/>
				</Typography>
				<Typography className={classes.subtitle} variant="h5">
					<Typed
						strings={[
							'Frontend Developer',
							'Backend Developer',
							'Fullstack Developer',
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					/>
				</Typography>
				<Typography className={classes.content} varient="body1">
					Still WIP (Don't judge)
				</Typography>
			</Grid>
		</Box>
	);
};

export default Header;
