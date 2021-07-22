import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const resumeData = [
	{
		year: 2021,
		content: [
			{
				jobTitle: 'TBD',
				companyName: 'TBD',
				duration: 'TBD',
				description:
					'Joining the company soon, but since it has not been fully confirmed and the first day has not started, this will be left as TBD.',
			},
		],
	},
	{
		year: 2020,
		content: [
			{
				jobTitle: 'Software Developer (Fullstack) Trainee',
				companyName: 'HealthBeats™ Pte Ltd',
				duration: 'Sep 2020 - Sep 2021',
				description:
					'Contributed to the development of the Frontend, Backend & Mobile modules of the Healthbeats™ system built on JavaScript and TypeScript, using the ReactJS & React Native frameworks. Remastered the typography used by the web application to consolidate all the fonts that the UI/UX designer uses. Took part in the Stabilisation Phase as both tester and bug fixer. Created migration scripts to change the production SQL database. Developed new cronjobs for business requirements. Added various modules into the system according to the business requirements of clients.',
			},
		],
	},
];

const unrelatedData = [
	{
		year: 2019,
		content: [
			{
				jobTitle: 'Admin Assistant',
				companyName: 'New Creation Church, Rock Kidz Department',
				duration: 'Aug – Sep 2019, Jul – Sep 2018',
				description:
					'Performed on-field and on-call parent support for implementing the new PDPA laws. Supported data entry collection for multiple events. Sorted data in multiple events. Streamlined and automated data storing using spreadsheet formulae for future Rock Kidz Camps. Supported the camps on-site regarding administrative matters',
			},
		],
	},
	{
		year: 2015,
		content: [
			{
				jobTitle: 'Intern',
				companyName: "The Boys' Brigade of Singapore",
				duration: 'Feb - Apr 2015',
				description:
					'Supported and facilitated different events in the Boys’ Brigade (BB) such as the 85th Anniversary, Stakeholder meetings, and Foreign BB Visitors.',
			},
		],
	},
];

const Resume = () => {
	const classes = useStyles();
	return (
		<Box className={classes.mainContainer}>
			<Typography variant="h4" align="center" className={classes.heading}>
				Working Experience
			</Typography>
			<Box component="div" className={classes.timeLine}>
				{resumeData.map(year => (
					<React.Fragment>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
						>
							{year.year}
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							{year.content.map(content => (
								<React.Fragment>
									<Typography
										variant="h5"
										align="center"
										className={classes.subHeading}
									>
										{content.jobTitle}
									</Typography>
									<Typography
										variant="body1"
										align="center"
										className={classes.body1}
									>
										{content.companyName}
									</Typography>
									<Typography
										variant="subtitle2"
										align="center"
										className={classes.subtitle2}
									>
										{content.duration}
									</Typography>
									<Typography
										variant="subtitle1"
										align="center"
										className={classes.subtitle1}
									>
										{content.description}
									</Typography>
								</React.Fragment>
							))}
						</Box>
					</React.Fragment>
				))}
			</Box>
			<Typography variant="h4" align="center" className={classes.heading}>
				Unrelated Experience
			</Typography>
			<Box component="div" className={classes.timeLine}>
				{unrelatedData.map(year => (
					<React.Fragment>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
						>
							{year.year}
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							{year.content.map(content => (
								<React.Fragment>
									<Typography
										variant="h5"
										align="center"
										className={classes.subHeading}
									>
										{content.jobTitle}
									</Typography>
									<Typography
										variant="body1"
										align="center"
										className={classes.body1}
									>
										{content.companyName}
									</Typography>
									<Typography
										variant="subtitle2"
										align="center"
										className={classes.subtitle2}
									>
										{content.duration}
									</Typography>
									<Typography
										variant="subtitle1"
										align="center"
										className={classes.subtitle1}
									>
										{content.description}
									</Typography>
								</React.Fragment>
							))}
						</Box>
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
};

const useStyles = makeStyles(theme => ({
	mainContainer: {
		background: theme.palette.primary.dark,
		overflow: 'auto',
		maxHeight: window.innerHeight - 56,
	},
	timeLine: {
		position: 'relative',
		padding: '1rem',
		margin: 'o auto',
		'&:before': {
			content: "''",
			position: 'absolute',
			height: '100%',
			border: '1px solid tan',
			right: '40px',
			top: 0,
		},
		'&:after': {
			content: "''",
			display: 'table',
			clear: 'both',
		},
		[theme.breakpoints.up('md')]: {
			padding: '2rem',
			'&:before': {
				left: 'calc(50% - 1px)',
				right: 'auto',
			},
		},
	},
	timeLineItem: {
		padding: '1rem',
		borderBottom: '2px solid tan',
		position: 'relative',
		margin: '1rem 3rem 1rem 1rem',
		clear: 'both',
		'&:after': {
			content: "''",
			position: 'absolute',
		},
		'&:before': {
			content: "''",
			position: 'absolute',
			right: '-0.625rem',
			top: 'calc(50% - 5px)',
			borderStyle: 'solid',
			borderColor: `${theme.palette.secondary.main} ${theme.palette.secondary.main} transparent transparent`,
			borderWidth: '0.625rem',
			transform: 'rotate(45deg)',
		},
		[theme.breakpoints.up('md')]: {
			width: '44%',
			margin: '1rem',
			'&:nth-of-type(2n)': {
				float: 'right',
				margin: '1rem',
				borderColor: 'tan',
			},
			'&:nth-of-type(2n):before': {
				right: 'auto',
				left: '-0.625rem',
				borderColor: `transparent transparent ${theme.palette.secondary.main} ${theme.palette.secondary.main}`,
			},
		},
	},
	timeLineYear: {
		textAlign: 'center',
		maxWidth: '9.375rem',
		margin: '0 3rem 0 auto',
		fontSize: '1.8rem',
		background: theme.palette.secondary.main,
		lineHeight: 1,
		padding: '0.5rem 1rem',
		'&:before': {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			textAlign: 'center',
			margin: '0 auto',
			'&:nth-of-type(2n)': {
				float: 'none',
				margin: '0 auto',
			},
			'&:nth-of-type(2n):before': {
				display: 'none',
			},
		},
	},
	heading: {
		color: theme.palette.secondary.main,
		padding: '3rem 0',
		textTransform: 'uppercase',
	},
	subHeading: {
		color: '#fff',
		padding: 0,
		marginTop: 8,
		textTransform: 'uppercase',
	},
	body1: {
		color: theme.palette.secondary.main,
	},
	subtitle2: {
		color: theme.palette.primary.light,
	},
	subtitle1: {
		color: 'tan',
	},
}));

export default Resume;
