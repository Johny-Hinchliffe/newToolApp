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
} from '@mui/material'

export default function StepperComp({
	results,
	title,
	content,
	state,
	setState,
	func,
}) {
	const [activeStep, setActiveStep] = React.useState(0)
	const [reset, setReset] = React.useState()
	const [error, setError] = React.useState({})
	const [stepCount, setStepCount] = React.useState(0)

	React.useEffect(() => {
		setReset(state)
	}, [])

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	// const handleBack = () => {
	// 	setActiveStep((prevActiveStep) => prevActiveStep - 1)
	// }

	const handleReset = () => {
		setActiveStep(0)
		setStepCount(0)
		setState(reset)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		const names = content.map((sections) =>
			sections.inputs.map((input) => input.name)
		)

		const allNames = [].concat(...names)

		const funcArguments = allNames.map((name) => data.get(name))
		const filteredArguments = funcArguments.filter((el) => el)

		if (filteredArguments?.length === content[stepCount]?.inputs.length) {
			setState(state.concat(...filteredArguments))
			setStepCount(stepCount + 1)
			setError({})
			handleNext()
		} else {
			const obj = {}

			allNames.forEach((element, index) => {
				obj[element] = funcArguments[index]

				setError(obj)
			})
		}
	}

	const inputs = content.map((section, index) => {
		return (
			<Step key={section.label}>
				<StepLabel>{section.label}</StepLabel>
				<StepContent>
					<Box component="form" onSubmit={handleSubmit}>
						<Card sx={{ minWidth: 275 }} elevation={4}>
							<CardContent>
								{section.inputs.map((step, el) => {
									return (
										<TextField
											key={step.name}
											label={step.label}
											id="outlined-start-adornment"
											variant={step.variant}
											name={step.name}
											type={step.type}
											error={Object.keys(error).length > 0 && !error[step.name]}
											onChange={() => setError({})}
											InputProps={{
												endAdornment: (
													<InputAdornment position="start">
														{step.inputProp}
													</InputAdornment>
												),
											}}
											sx={{ mb: '10px' }}
										/>
									)
								})}
							</CardContent>
						</Card>

						<Box sx={{ mb: 2 }}>
							<div>
								<Button variant="contained" type="submit" sx={{ mt: 1, mr: 1 }}>
									{index === content.length - 1 ? 'Finish' : 'Continue'}
								</Button>
								{index > 0 ? (
									<Button sx={{ mt: 1, mr: 1 }} onClick={handleReset}>
										Reset
									</Button>
								) : null}

								{/* <Button
									disabled={index === 0}
									onClick={handleBack}
									sx={{ mt: 1, mr: 1 }}
								>
									Back
								</Button> */}
							</div>
						</Box>
					</Box>
				</StepContent>
			</Step>
		)
	})

	return (
		<Box sx={{ maxWidth: 400, minWidth: 350 }}>
			<Typography textAlign="center" variant="h4" margin="25px">
				{title}
			</Typography>

			<Stepper activeStep={activeStep} orientation="vertical">
				{inputs}
			</Stepper>

			{activeStep === content.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					{results}
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Button sx={{ mt: 1, mr: 1 }} onClick={handleReset}>
							Reset
						</Button>
					</Box>
				</Paper>
			)}
		</Box>
	)
}
