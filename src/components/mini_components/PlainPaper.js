import * as React from 'react'

import {
	Typography,
	Paper,
	Button,
	StepContent,
	StepLabel,
	Step,
	Stepper,
	Box,
	TextField,
	Card,
	CardContent,
	InputAdornment,
	Input,
	Container,
} from '@mui/material'

export default function StepperComp({
	results,
	title,
	content,
	state,
	setState,
	func,
}) {
	const handleSubmit = (event) => {
		event.preventDefault()
		func()
	}

	return (
		<Container>
			<Typography textAlign="center" variant="h4" margin="25px">
				{title}
			</Typography>
			<Box
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				<Paper
					square
					elevation={5}
					sx={{
						p: 3,
						maxWidth: 400,
						minWidth: 350,
						height: '60vh',
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center',
						flexDirection: 'column',
					}}
				>
					<div></div>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{content}
					</Box>

					<Box
						sx={{
							alignSelf: 'center',
							justifySelf: 'flex-end',
							height: '40px',
						}}
					>
						<Button onClick={handleSubmit} variant="contained">
							Reset
						</Button>
					</Box>
				</Paper>
			</Box>
		</Container>
	)
}
