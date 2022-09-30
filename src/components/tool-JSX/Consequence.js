import { useState, useEffect } from 'react'

import { Container, Typography } from '@mui/material'

import Stepper from '../mini_components/StepperComp'
import consequence from '../tool-functions/consequence'
import Tabs from '../mini_components/Tabs'

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
			label: "Where did they meet? 'They met at...'",
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
			label: "What did they do there? 'to...'",
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
			label: "What did he wear?'He wore...'",
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
			label: "What did she wear? 'She wore...'",
			inputs: [
				{
					label: 'a dinosaur costume, a dress...',
					variant: 'standard',

					name: 'clothes2',
					type: 'text',
				},
			],
		},
		{
			label: "What did he do? 'He...'",
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
			label: "What did she do? 'She...'",
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
			label: "Think of a lovely ending. 'In the end...'",
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
				//tabs={<Tabs tabs={['Store 1', 'Story 2', 'Story 3', 'Story 4', 'Story 5', 'Story 6']} tabPanel={['1', '2']}/>}
				content={content}
				results={results}
				state={result}
				setState={setResult}
			/>
		</Container>
	)
}

export default Consequence
