import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const Contact = () => {
	const classes = useStyles();

	return (
		<Box className={classes.mainContainer}>
			<Typography className={classes.text}>Contact here lol.</Typography>
		</Box>
	);
};

const useStyles = makeStyles(theme => ({
	mainContainer: {
		background: theme.palette.primary.dark,
		width: '100%',
		minHeight: window.innerHeight,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		color: theme.palette.primary.contrastText,
	},
}));

export default Contact;
