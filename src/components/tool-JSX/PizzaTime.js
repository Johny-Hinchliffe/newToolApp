import { useState } from 'react'

import { Container, Typography} from '@mui/material'

import Stepper from '../mini_components/StepperComp'
import whichPizza from '../tool-functions/whichPizza'

// const pizzaDisplay = () => {
// 	return (
// 		<>
// 			<Box mb= '20px'
// 				sx={{ display: 'flex', alignItems: 'center' }}
// 			>
// 				<Typography variant="h4" sx={{ display: 'inline-block', mr: 5 }}>
// 					{' '}
// 					1x
// 				</Typography>
// 				<Paper
// 					elevation={0}
// 					sx={{
// 						width: '90px',
// 						height: '90px',
// 						borderRadius: '50%',
// 						background:
// 							'conic-gradient(red 0deg, transparent 0deg 0deg, red 0deg)',
// 						display: 'flex',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 					}}
// 				>
// 					<Typography variant="h4"> 18"</Typography>
// 				</Paper>
// 			</Box>
// 			<Box
// 				sx={{ display: 'flex', alignItems: 'center' }}
// 			>
// 				<Typography variant="h4" sx={{ display: 'inline-block', mr: 5 }}>
// 					{' '}
// 					2x
// 				</Typography>
// 				<Paper
// 					elevation={0}
// 					sx={{
// 						width: '60px',
// 						height: '60px',
// 						borderRadius: '50%',
// 						background:
// 							'conic-gradient(red 0deg, transparent 0deg 0deg, yellow 0deg)',
// 						display: 'flex',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 					}}
// 				>
// 					<Typography variant="h4"> 12"</Typography>
// 				</Paper>
// 				<Paper
// 					elevation={0}
// 					sx={{
// 						width: '60px',
// 						height: '60px',
// 						borderRadius: '50%',
// 						background:
// 							'conic-gradient(red 0deg, transparent 0deg 315deg, yellow 315deg)',
// 						display: 'flex',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 					}}
// 				>
				
// 				</Paper>
// 			</Box>
// 		</>
// 	)
// }

const PizzaTime = () => {
	const [result, setResult] = useState([])
	const results = (
		<>
			<Typography
				textAlign="center"
				variant="h6"
				gutterBottom={true}
				sx={{ fontWeight: 900, textDecoration: 'underline' }}
			>
				{whichPizza(result).question}
			</Typography>
			<Typography textAlign="center" variant="subtitle1">
				{whichPizza(result).answer}
			</Typography>
			{/* {pizzaDisplay()} */}
		</>
	)

	const content = [
		{
			label: 'Option 1',
			inputs: [
				{
					label: 'Quantity',
					variant: 'standard',
					inputProp: 'pizza/s',
					name: 'quan1',
					type: 'number'
				},
				{
					label: 'Pizza Size',
					variant: 'standard',
					inputProp: 'inch',
					name: 'size1',
					type: 'number'
				},
			],
		},
		{
			label: 'Option 2',
			inputs: [
				{
					label: 'Quantity',
					variant: 'standard',
					inputProp: 'pizza/s',
					name: 'quan2',
					type: 'number'
				},
				{
					label: 'Pizza Size',
					variant: 'standard',
					inputProp: 'inch',
					name: 'size2',
					type: 'number'
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
				title={'Pizza Time'}
				content={content}
				results={results}
				state={result}
				setState={setResult}
			/>
		</Container>
	)
}

export default PizzaTime
