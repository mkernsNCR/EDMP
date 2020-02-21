import React from 'react';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography
} from '@material-ui/core';

import { useStyles } from './styles';

export default function personCard(props) {
	const classes = useStyles();
	console.log('These are personCard props ====>', props);

	return (
		<Grid container direction="row" alignContent="center" justify="center">
			{props.platform.map(person => (
				<Grid key={person.name} className={classes.cardSpacer} item>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="/src/web/static/img/default-profile-pic.png"
								title={person.name}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{person.name}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{person.role}
								</Typography>
								<Typography
									variant="caption"
									color="textSecondary"
									component="p">
									{person.platform}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Learn More About {person.name}
							</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
