import {
	Typography,
	Card,
	CardActions,
	Box,
	Button,
	CardContent,
	Container,
} from '@mui/material'

import React from 'react'

const DadJoke = () => {
	const bull = (
		<Box
			component="span"
			sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
		>
			•
		</Box>
	)

	const card = (
		<React.Fragment>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Word of the Day
				</Typography>
				<Typography variant="h5" component="div">
					be{bull}nev{bull}o{bull}lent
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</React.Fragment>
	)

	return (
		<>
			<Typography textAlign="center" variant="h4" margin="25px">
				Dad Jokes
			</Typography>
			<Container>
				<Card variant="outlined">{card}</Card>
			</Container>
		</>
	)
}

export default DadJoke
