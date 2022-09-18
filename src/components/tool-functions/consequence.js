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
				The story begins when {answers[0]} {answers[1]} met {answers[2]} {answers[3]} at {answers[4]?.toLowerCase()} to {answers[5]?.toLowerCase()}.
			</Typography>
			<Typography textAlign="center" variant="subtitle1">
				He wore {answers[6]?.toLowerCase()} and she wore {answers[7]?.toLowerCase()}. All of a sudden he {answers[8]?.toLowerCase()} and she {answers[9]?.toLowerCase()}.
			</Typography>
			<Typography textAlign="center" variant="subtitle1">
				In the end {answers[10]?.toLowerCase()} and the world said '{answers[11]?.toLowerCase()}'
			</Typography>
		</>
	)
}

export default consequence
