// import { useState, useEffect } from 'react'

// import { Typography } from '@mui/material'

// import Stepper from '../mini_components/StepperComp'
// import whosTurn from '../tool-functions/whosTurn'

// const WhosTurn = () => {
// 	const [result, setResult] = useState([])
// 	const [answer, setAnswer] = useState('')

// 	const content = [
// 		{
// 			label: '',
// 			inputs: [
// 				{
// 					label: 'List people',
// 					helperText: 'Enter names seperated by a comma',
// 					variant: 'standard',
// 					name: 'allNames',
// 					type: 'text',
// 				},
// 				{
// 					label: 'Task at hand',
// 					helperText: 'wash the dishes',
// 					variant: 'standard',
// 					name: 'task',
// 					type: 'text',
// 				},
// 			],
// 		},
// 	]

// 	useEffect(() => {
// 		if (result !== []) {
// 			setAnswer(whosTurn(result))
// 		}
// 		console.log(result)
// 	}, [result])

// 	const results = (
// 		<>
// 			<Typography
// 				textAlign="center"
// 				variant="h6"
// 				gutterBottom={true}
// 				sx={{ fontWeight: 900, textDecoration: 'underline' }}
// 			>
// 				{answer?.question}
// 			</Typography>
// 			<Typography variant="h6">Total Journey Cost:</Typography>
// 			<Typography variant="h6" gutterBottom>
// 				£{answer?.journeyCost2}
// 			</Typography>
// 			<Typography variant="h6">Cost Per Mile:</Typography>
// 			<Typography variant="h6" gutterBottom>
// 				£{answer?.costPerMile}
// 			</Typography>
// 			<Typography variant="h6">Cost Per Person:</Typography>
// 			<Typography variant="h6">£{answer?.costPerPerson}</Typography>
// 		</>
// 	)

// 	return (
// 		<Stepper
// 			content={content}
// 			title={'Car Share'}
// 			results={results}
// 			state={result}
// 			setState={setResult}
// 		/>
// 	)
// }

// export default WhosTurn

import { useState, useEffect } from 'react'

import { Container, Typography } from '@mui/material'

import Stepper from '../mini_components/StepperComp'
import carShare from '../tool-functions/carShare'
import whosTurn from '../tool-functions/whosTurn'

const CarShare = () => {
	const [result, setResult] = useState([])
	const answer = whosTurn(result)

	const results = (
		<>
			<Typography
				textAlign="center"
				variant="h6"
				gutterBottom={true}
				sx={{ fontWeight: 900 }}
			>
				{answer}
			</Typography>
		</>
	)

	const content = [
		{
			label: 'Journey Info',
			inputs: [
				{
					label: 'List people',
					helperText: 'Enter names seperated by a comma',
					variant: 'standard',
					name: 'allNames',
					type: 'text',
				},
				{
					label: 'Task at hand',
					helperText: 'wash the dishes',
					variant: 'standard',
					name: 'task',
					type: 'text',
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
				title={"Who's turn?"}
				content={content}
				results={results}
				state={result}
				setState={setResult}
			/>
		</Container>
	)
}

export default CarShare
