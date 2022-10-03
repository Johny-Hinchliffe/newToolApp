import { useState, useEffect } from 'react'

import { Container, Typography } from '@mui/material'

import DotStepper from '../mini_components/DotStepper'

import PlainPaper from '../mini_components/PlainPaper'
import Tabs from '../mini_components/Tabs'

import Story1 from './Story1'

// title,
// 	content,
// 	func,
// 	button,
// 	otherButton,
// 	buttonType,
// 	boxType,
// 	onSubmit,
// 	modal
//<Tabs tabs={['Store 1', 'Story 2', 'Story 3', 'Story 4', 'Story 5', 'Story 6']} tabPanel={['1', '2']}/>

const Consequence = () => {

	const title='Story Time'
	const tab=<Tabs tabs={['Store 1', 'Story 2', 'Story 3', 'Story 4', 'Story 5', 'Story 6']} tabPanels={[<Story1/>, '2']}/>

	return (
		<>
		<PlainPaper title={title}  tabs={tab}/>
		</>
	)
	
}
export default Consequence
