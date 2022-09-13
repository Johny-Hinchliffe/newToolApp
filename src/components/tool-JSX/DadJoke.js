import {
	Typography,
	Card,
	CardActions,
	Box,
	Button,
	CardContent,
	Container,
} from '@mui/material'

import * as React from 'react'

import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import FormControlLabel from '@mui/material/FormControlLabel'

const DadJoke = () => {
	const [checked, setChecked] = React.useState(false)

	const handleChange = () => {
		setChecked((prev) => !prev)
	}

	const bull = (
		<Box
			component="span"
			sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
		>
			•
		</Box>
	)

	const icon = (
		<Paper sx={{ m: 1 }} elevation={4}>
			<Box component="svg" sx={{ width: 100, height: 100 }}>
				<Box
					component="polygon"
					sx={{
						fill: (theme) => theme.palette.common.white,
						stroke: (theme) => theme.palette.divider,
						strokeWidth: 1,
					}}
					points="0,100 50,00, 100,100"
				/>
			</Box>
		</Paper>
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
				<Box sx={{ height: 180 }}>
					<Box sx={{ width: `calc(100px + 16px)` }}>
						<FormControlLabel
							control={<Switch checked={checked} onChange={handleChange} />}
							label="Show"
						/>
						<Slide direction="right" in={checked} mountOnEnter unmountOnExit>
							{icon}
						</Slide>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default DadJoke
