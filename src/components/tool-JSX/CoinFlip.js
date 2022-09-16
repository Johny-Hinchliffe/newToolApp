import * as React from 'react'
import Box from '@mui/material/Box'
import {CircularProgress, Typography} from '@mui/material'
import { green } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import CheckIcon from '@mui/icons-material/Check'
import SaveIcon from '@mui/icons-material/Save'

import headsImage from '../../images/50p-heads.png'
import tailsImage from '../../images/50p-tails.png'
import questionImage from '../../images/question-mark.png'

import PlainPaper from '../mini_components/PlainPaper'

export default function CircularIntegration() {
	const [loading, setLoading] = React.useState(false)
	const [success, setSuccess] = React.useState(false)
	const [image, setImage] = React.useState(headsImage)
	const [result, setResult] = React.useState(null)

	const timer = React.useRef()

	const buttonSx = {
		...(success && {
			bgcolor: green[500],
			'&:hover': {
				bgcolor: green[700],
			},
		}),
	}

	React.useEffect(() => {
		return () => {
			clearTimeout(timer.current)
		}
	}, [])

	const handleButtonClick = () => {
		const options = ['Heads', 'Tails']
		const choice = Math.round(Math.random() * 1)
		const result = options[choice]
		setResult(result)
		setImage(result === 'Heads' ? headsImage : tailsImage)
		console.log(result)

		if (!loading) {
			setSuccess(false)
			setLoading(true)
			timer.current = window.setTimeout(() => {
				setSuccess(true)
				setLoading(false)
			}, 2000)
		}
	}

	const imageResult = (choice) => {
		return (
			<Box
				component="img"
				sx={{
					height: 233,
					width: 233,
					maxHeight: { xs: 366, md: 366 },
					maxWidth: { xs: 400, md: 400 },
					mb: '15px'
				}}
				alt={result}
				src={choice}
			/>
		)
	}

	const rotate = (
		<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
			<Box sx={{position: 'relative' }}>
				
			{success ? <Typography variant='h5' textAlign="center" mb='15px'>{result}</Typography> :<Typography variant='h5' textAlign="center" mb='15px' color='transparent'>c</Typography> }
			</Box>
			<Box sx={{ m: 1, position: 'relative' }}>
				<Box onClick={handleButtonClick}>
					{success ? imageResult(image) : imageResult(questionImage)}
				</Box>
				{loading && (
					<CircularProgress
						size={233}
						color='primary'
						sx={{
							position: 'absolute',
							top: -6,
							left: -6,
							zIndex: 1,
						}}
					/>
				)}
			</Box>
		</Box>
	)

	return (
		<>
			<PlainPaper title={'Coin Toss'} content={rotate} func={handleButtonClick} />
		</>
	)
}
