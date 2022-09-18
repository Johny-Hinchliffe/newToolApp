import React from 'react'

import { Typography } from '@mui/material'
// const answers = [
// 	'angry',
// 	'steve',
// 	'strong',
// 	'Betty',
// 	'the park',
// 	'watch the disco',
// 	'sandels',
// 	'crocs',
// 	'punched a squirrel ',
// 	'licked a dog',
// 	'the got HIV',
// 	"You really shouldn't have done that",
// ]

const consequence = (answers) => {
	return (
		<>
			<Typography textAlign="center" variant="subtitle1">
				The story begins when {answers[0]} {answers[1]} met {answers[2]}
				{answers[3]} at {answers[4]} to {answers[5]}.
			</Typography>
			<Typography textAlign="center" variant="subtitle1">
				He wore {answers[6]} and she wore {answers[7]}. All of a sudden he{' '}
				{answers[8]} and she decided to {answers[9]}.
			</Typography>
			<Typography textAlign="center" variant="subtitle1">
				In the end {answers[10]} and the world said '{answers[11]}'
			</Typography>
		</>
	)
}

export default consequence
