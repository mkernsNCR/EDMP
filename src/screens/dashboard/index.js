import React from 'react';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import People from '../../components/personCard';

import { useStyles } from '../styles';

const Dashboard = () => {
	const classes = useStyles();

	const people = [
		{ name: 'Matthew', role: 'Full Stack Developer', platform: 'CDX' },
		{ name: 'Mario', role: 'Full Stack Developer', platform: 'EDFR' },
		{ name: 'Stephen', role: 'Full Stack Developer', platform: 'CDX' },
		{ name: 'Navya', role: 'Full Stack Developer', platform: 'CDX' },
		{ name: 'Sushama', role: 'Full Stack Developer', platform: 'CDX' },
		{ name: 'Usman', role: 'Full Stack Developer', platform: 'EDFR' },
		{ name: 'Danny', role: 'Data Scientist', platform: 'EDFR' },
		{ name: 'Mia', role: 'Data Scientist', platform: 'EDFR' },
		{ name: 'Abubakar', role: 'Full Stack Developer', platform: 'HDR' },
		{ name: 'Rama', role: 'Full Stack Developer', platform: 'HDR' },
		{ name: 'Christine', role: 'Project Coordinator', platform: 'HDR' },
		{ name: 'Siva', role: 'Full Stack Developer', platform: 'HDR' }
	];

	const edmpTeam = people.sort((a, b) => {
		let nameA = a.name.toLowerCase(),
			nameB = b.name.toLowerCase();
		if (nameA < nameB)
			//sort string ascending
			return -1;
		if (nameA > nameB) return 1;
		return 0; //default return value (no sorting));
	});

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={classes.paper}>
								<Typography
									component="h1"
									variant="h4"
									color="inherit"
									className={classes.platformTitle}>
									EDMP Dashboard
								</Typography>
								<People platform={edmpTeam} />
							</Paper>
						</Grid>
					</Grid>
				</Container>k
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
