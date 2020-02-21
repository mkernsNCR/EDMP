import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const navStyle = {
	color: 'inherit',
	textDecoration: 'none'
};

export const mainListItems = (
	<div>
		<Link to="/" style={navStyle}>
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="EDMP Dashboard" />
			</ListItem>
		</Link>
		<Link to="/cdx" style={navStyle}>
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="CDX Dashboard" />
			</ListItem>
		</Link>
		<Link to="/edfr" style={navStyle}>
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="EDFR Dashboard" />
			</ListItem>
		</Link>
		<Link to="/hdr" style={navStyle}>
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="HDR Dashboard" />
			</ListItem>
		</Link>
		<ListItem button>
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Settings" />
		</ListItem>
	</div>
);
