import React from 'react';
import clsx from 'clsx';
import {
	Container,
	Grid,
	Paper,
	Typography,
	CssBaseline,
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Drawer,
	Divider,
	List
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from '../../components/listItems';

import * as Screens from '../../screens';

import Dashboard from '../../screens/dashboard';
import CDX from '../../screens/cdx';
import EDFR from '../../screens/edfr';
import HDR from '../../screens/hdr';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { useStyles } from './styles';

export const Nav = () => {
	console.log(Screens);
	// const screenArr = Object.keys(Screens).map(i => screenObj[i]);
	// console.log(screenArr);
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden
						)}>
						<MenuIcon />
					</IconButton>

					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}>
						<Link to="/" className={classes.titleColor}>
							EDMP Azure Dashboard
						</Link>
					</Typography>

					<IconButton color="inherit">
						<Badge badgeContent={10} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
				}}
				open={open}>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List className={classes.listHeight}>{mainListItems}</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/cdx" component={CDX} />
					<Route path="/edfr" component={EDFR} />
					<Route path="/hdr" component={HDR} />
				</Switch>
			</main>
		</div>
	);
};
