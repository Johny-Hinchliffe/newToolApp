import { useState, useEffect } from 'react'

import { Container, Typography } from '@mui/material'

import Stepper from '../mini_components/StepperComp'
import carShare from '../tool-functions/carShare'

const CarShare = () => {
	const [result, setResult] = useState([])
	const answer = carShare(result)

	const results = (
		<>
			<Typography
				textAlign="center"
				variant="h6"
				gutterBottom={true}
				sx={{ fontWeight: 900, textDecoration: 'underline' }}
			>
				{answer?.question}
			</Typography>
			<Typography variant="h6">Total Journey Cost:</Typography>
			<Typography variant="h6" gutterBottom>
				£{answer?.journeyCost2}
			</Typography>
			<Typography variant="h6">Cost Per Mile:</Typography>
			<Typography variant="h6" gutterBottom>
				£{answer?.costPerMile}
			</Typography>
			<Typography variant="h6">Cost Per Person:</Typography>
			<Typography variant="h6">£{answer?.costPerPerson}</Typography>
		</>
	)

	const content = [
		{
			label: 'Journey Info',
			inputs: [
				{
					label: 'Distance Driven',
					variant: 'standard',
					name: 'miles',
					inputProp: 'miles',
					type: 'number',
					increase: "0.01"
				},
				{
					label: 'Cost per litre (169.9)',
					variant: 'standard',
					inputProp: 'p',
					name: 'cost',
					type: 'number',
					increase: "0.01"
				},
				{
					label: 'Miles Per Gallon',
					variant: 'standard',
					inputProp: 'mpg',
					name: 'mpg',
					type: 'number',
					increase: "0.01"
				},
				{
					label: 'Splitting between..',
					variant: 'standard',
					inputProp: 'people',
					name: 'people',
					type: 'number',
				},
			],
		},
	]

	return (
		<Container
			sx={{
				display: 'flex',
				alignItems: 'center',
				height: '100vh',
				flexDirection: 'column',
			}}
		>
			<Stepper
				title={'Car Share'}
				content={content}
				results={results}
				state={result}
				setState={setResult}
			/>
		</Container>
	)
}

export default CarShare
