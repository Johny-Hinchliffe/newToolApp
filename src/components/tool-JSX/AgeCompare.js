import { useState } from 'react'

import { Container, Typography} from '@mui/material'

import Stepper from '../mini_components/StepperComp'
import ageDiff from '../tool-functions/ageDiff'


const AgeCompare = () => {
	const [result, setResult] = useState([])
	const results = (
		<>
			<Typography
				textAlign="center"
				variant="h6"
				gutterBottom={true}
				sx={{ fontWeight: 900, textDecoration: 'underline' }}
			>
				{ageDiff(result).question}
			</Typography>
			<Typography textAlign="center" variant="subtitle1">
				{ageDiff(result).answer}
			</Typography>
		</>
	)

	const content = [
		{
			label: 'Person 1',
			inputs: [
				{
					label: 'Name',
					variant: 'standard',
					name: 'name1',
					type: 'string'
				},
				{
					label: 'Birth Year',
					variant: 'standard',
					
					name: 'birth1',
					type: 'number'
				},
			],
		},
		{
			label: 'Person 2',
			inputs: [
				{
					label: 'Name',
					variant: 'standard',
				
					name: 'name2',
					type: 'string'
				},
				{
					label: 'Birth Year',
					variant: 'standard',
					
					name: 'birth2',
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
				title={'Double Age'}
				content={content}
				results={results}
				state={result}
				setState={setResult}
			/>
		</Container>
	)
}

export default AgeCompare
