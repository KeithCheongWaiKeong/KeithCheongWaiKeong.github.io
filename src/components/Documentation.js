import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const Documentation = () => {
	const classes = useStyles();

	return (
		<Box className={classes.mainContainer}>
			<Typography className={classes.text}>Documentation here lol.</Typography>
		</Box>
	);
};

const useStyles = makeStyles(theme => ({
	mainContainer: {
		background: theme.palette.primary.dark,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '100%',
		maxHeight: window.innerHeight,
		textAlign: 'center',
		zIndex: 1,
	},
	text: {
		textAlign: 'center',
		color: theme.palette.primary.contrastText,
	},
}));

export default Documentation;
