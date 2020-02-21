import React from 'react';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import People from '../../components/personCard';

import { useStyles } from '../styles';

const EDFR = () => {
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

	const edfrTeam = people.filter(person => person.platform === 'EDFR');

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
									EDFR Dashboard
								</Typography>
								<People platform={edfrTeam} />
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</div>
		</React.Fragment>
	);
};

export default EDFR;
