import { useState } from 'react'
import { Typography } from '@mui/material'
import PlainPaper from '../mini_components/PlainPaper'
import Loader from '../mini_components/Loader'

const DadJoke = () => {
	const [joke, setJoke] = useState('Ready to Laugh?')

	const jokeGenerator = async () => {
		const config = {
			headers: {
				Accept: 'application/json',
			},
		}
		setJoke('Loader')
		const res = await fetch('https://icanhazdadjoke.com', config)

		const data = await res.json()

		setTimeout(() => {
			setJoke(data.joke)

		}, 1000)
	}



	const layout = (
		<Typography textAlign='center' variant='h5' sx={{ alignSelf: 'center', justifySelf: 'center' }}>
			{joke === 'Loader' ? <Loader text={'Finding another joke'}/> : joke}
		</Typography>
	)

	return (
		<>
			<PlainPaper title={'Dad Jokes'} content={layout} func={jokeGenerator} button={'Get a Joke'} />
		</>
	)
}

export default DadJoke
