import { useState, useEffect } from 'react'

import { Container, Typography } from '@mui/material'

import Stepper from '../mini_components/StepperComp'
import consequence from '../tool-functions/consequence'

const Consequence = () => {
	const [result, setResult] = useState([])

	const results = (
		<>
			<Typography
				textAlign="center"
				variant="h6"
				gutterBottom={true}
				sx={{ fontWeight: 900, textDecoration: 'underline' }}
			>
				{' '}
				The true story of {result[1]} and {result[3]}
			</Typography>

			{consequence(result)}

			{/* {pizzaDisplay()} */}
		</>
	)

	const content = [
		{
			label: 'Start with an adjective',
			inputs: [
				{
					label: 'angry, bad, clever...',
					variant: 'standard',

					name: 'adj1',
					type: 'text',
				},
			],
		},
		{
			label: "Now enter a man's name",
			inputs: [
				{
					label: 'Adam, Barry, Chris...',
					variant: 'standard',

					name: 'name1',
					type: 'text',
				},
			],
		},
		{
			label: 'Enter another adjective',
			inputs: [
				{
					label: 'strong, happy, poor',
					variant: 'standard',

					name: 'adj2',
					type: 'text',
				},
			],
		},
		{
			label: "Now enter a woman's name",
			inputs: [
				{
					label: 'Alice, Bri, Casey...',
					variant: 'standard',

					name: 'name2',
					type: 'text',
				},
			],
		},
		{
			label: "Think of a location the met at: 'at...'",
			inputs: [
				{
					label: 'the park, Ikea, the zoo...',
					variant: 'standard',

					name: 'location',
					type: 'text',
				},
			],
		},
		{
			label: "Why did they go there? 'to...'",
			inputs: [
				{
					label: 'play football, eat chocolate...',
					variant: 'standard',

					name: 'activity',
					type: 'text',
				},
			],
		},
		{
			label: "What did he wear? Following the word 'He wore...'",
			inputs: [
				{
					label: 'leather pants, a cowboy hat...',
					variant: 'standard',

					name: 'clothes1',
					type: 'text',
				},
			],
		},
		{
			label: "What did she wear? Following the word 'She wore...'",
			inputs: [
				{
					label: 'a dinosaure costume, a dress...',
					variant: 'standard',

					name: 'clothes2',
					type: 'text',
				},
			],
		},
		{
			label: "What did he do? Following the word 'He...'",
			inputs: [
				{
					label: 'combed his hair, ate icecream...',
					variant: 'standard',

					name: 'action1',
					type: 'text',
				},
			],
		},
		{
			label: "What did she do? Following the word 'She...'",
			inputs: [
				{
					label: 'punched a dog, drank some juice...',
					variant: 'standard',

					name: 'action2',
					type: 'text',
				},
			],
		},
		{
			label: "What was the result of this, 'In the end...'",
			inputs: [
				{
					label: 'They started a flamingo zoo',
					variant: 'standard',

					name: 'consequence',
					type: 'text',
				},
			],
		},
		{
			label: "How did the world feel? 'And the world said...'",
			inputs: [
				{
					label: 'Somehow I saw this coming',
					variant: 'standard',

					name: 'ending',
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
				marginBottom: 75,
			}}
		>
			<Stepper
				title={'Story Game'}
				content={content}
				results={results}
				state={result}
				setState={setResult}
			/>
		</Container>
	)
}

export default Consequence
