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
	title,
	content,
	func,
	button,
	otherButton,
	buttonType,
	boxType,
	onSubmit,
	modal, 
	tabs
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
			<Box component={boxType} onSubmit={onSubmit}
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
					{tabs}
					{otherButton ? otherButton : <div></div>}
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
						{ button ? <Button type={boxType} onClick={func ? handleSubmit : null} variant="contained">
							{button}
						</Button> : null}
						
					</Box>
				</Paper>
			</Box>
			{modal}
		</Container>
	)
}
