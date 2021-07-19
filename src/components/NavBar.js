import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
	AppBar,
	Avatar,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Tab,
	Tabs,
	Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import PhoneIcon from '@material-ui/icons/Phone';
import avatar from '../avatar.jpg';

const tabDetails = [
	{
		name: 'Resume',
		path: '/resume',
		icon: <DescriptionIcon />,
	},
	{
		name: 'Documentation',
		path: '/doc',
		icon: <FormatAlignLeftIcon />,
	},
	{
		name: 'Contact',
		path: '/contact',
		icon: <PhoneIcon />,
	},
];

const DesktopHeader = props => {
	const classes = useStyles();
	const { age, value, setValue } = props;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const resetValue = () => {
		setValue(null);
	};

	return (
		<AppBar className={classes.desktopAppBarContainer} position="sticky">
			<Avatar className={classes.avatar} src={avatar} alt="Keith Cheong" />
			<Button
				color="inherit"
				to="/"
				disableFocusRipple
				disableRipple
				component={Link}
				onClick={resetValue}
			>
				<Typography className={classes.avatarText} noWrap>
					{`Keith Cheong: ${age.toPrecision(11)} Years Old`}
				</Typography>
			</Button>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="standard"
				selectionFollowsFocus
			>
				{tabDetails.map(detail => (
					<Tab label={detail.name} to={detail.path} component={Link} />
				))}
			</Tabs>
		</AppBar>
	);
};

const MobileHeader = props => {
	const classes = useStyles();
	const { age, drawerOpen, setDrawerOpen, setValue } = props;

	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};

	const handleDrawerClose = index => {
		setValue(index);
		setDrawerOpen(false);
	};

	const resetValue = () => {
		setValue(null);
	};

	return (
		<AppBar className={classes.mobileAppBarContainer} position="static">
			<IconButton color="inherit" onClick={handleDrawerOpen}>
				<MenuIcon />
			</IconButton>
			<Avatar className={classes.avatar} src={avatar} alt="Keith Cheong" />
			<Button
				color="inherit"
				to="/"
				disableFocusRipple
				disableRipple
				component={Link}
				onClick={resetValue}
			>
				<Typography
					className={classes.avatarText}
				>{`Keith Cheong: ${age.toPrecision(11)} Years Old`}</Typography>
			</Button>
			<Drawer
				classes={{ paper: classes.drawerContainer }}
				anchor="left"
				open={drawerOpen}
				onClose={handleDrawerClose}
			>
				<List>
					{tabDetails.map((detail, index) => (
						<ListItem
							button
							to={detail.path}
							key={detail.name}
							component={Link}
							onClick={() => handleDrawerClose(index)}
						>
							<ListItemIcon className={classes.drawerIcon}>
								{detail.icon}
							</ListItemIcon>
							<ListItemText primaryTypographyProps={{ color: 'secondary' }}>
								{detail.name}
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
		</AppBar>
	);
};

const NavBar = () => {
	const [mobileView, setMobileView] = useState(false);
	const [value, setValue] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [age, setAge] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setAge(dayjs().diff(dayjs('1996-11-02'), 'year', true));
		});

		return () => {
			clearInterval(interval);
		};
	});

	useEffect(() => {
		const setResponsiveness = () => {
			return setMobileView(window.innerWidth < 900);
		};

		setResponsiveness();
		window.addEventListener('resize', () => setResponsiveness());

		return () =>
			window.removeEventListener('resize', () => setResponsiveness());
	}, []);

	return mobileView ? (
		<MobileHeader
			age={age}
			drawerOpen={drawerOpen}
			setDrawerOpen={setDrawerOpen}
			setValue={setValue}
		/>
	) : (
		<DesktopHeader age={age} value={value} setValue={setValue} />
	);
};

const useStyles = makeStyles(theme => ({
	desktopAppBarContainer: {
		minHeight: 56,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	mobileAppBarContainer: {
		minHeight: 56,
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		height: 32,
		width: 32,
		margin: 8,
	},
	avatarText: {
		textTransform: 'uppercase',
		margin: 8,
	},
	drawerContainer: {
		backgroundColor: theme.palette.primary.main,
	},
	drawerIcon: {
		color: theme.palette.secondary.main,
	},
}));

export default NavBar;
