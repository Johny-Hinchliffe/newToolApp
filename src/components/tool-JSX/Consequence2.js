import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import PlainPaper from '../mini_components/PlainPaper'
import { story1 } from '../important/stories'

const MultipleSelect = ({
	story,
	setStory,
	numPlayers,
	setNumPlayers,
	handleSubmit,
	changed,
	setChanged,
	storyOptions,
}) => {
	const [error, setError] = useState()

	const handleChange = (event) => {
		setStory(event.target.value)
	}
	const handleNumChange = (event) => {
		setNumPlayers(event.target.value)
	}

	const handleSubmitForm = () => {
		
	}

	const inputList = storyOptions.map((inputs) => {

		return (
			<Box
				sx={{
					minWidth: 120,
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1,
				}}
			>
				<Typography textAlign="center" variant="h5" sx={{ mb: 5 }}>
					Player {changed}
				</Typography>

				<Box component="form" onSubmit={handleSubmitForm}>
					{inputs.map((input) => {
						console.log(input.inputs.name)

						return (
							<TextField
								fullWidth
								key={input.inputs.name}
								helperText={input.label}
								label={input.inputs.label}
								id="outlined-start-adornment"
								variant={input.inputs.variant}
								name={input.inputs.name}
								type={input.inputs.type}
								// error={Object.keys(error).length > 0 && !error[input.name]}
								onChange={() => setError({})}
								inputProps={{ input: input.increase }}
								// InputProps={{

								// 	endAdornment: (
								// 		<InputAdornment position="start">
								// 			{input.inputProp}
								// 		</InputAdornment>
								// 	),
								// }}
								sx={{ mb: '10px' }}
							/>
						)
					})}
					<TextField sx={{ mb: 5 }}></TextField>
				</Box>
				<Button variant="contained" onClick={handleSubmit}>
					Go
				</Button>
			</Box>
		)
	})

	const stages = [
		<Box
			sx={{
				minWidth: 120,
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
			}}
		>
			<Typography sx={{ mb: 5 }}>
				Pick a story and choose the amount of players
			</Typography>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Story</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={story}
					label="Story story1"
					onChange={handleChange}
					sx={{ mb: 5 }}
				>
					<MenuItem value={1}>Basic Story</MenuItem>
					<MenuItem value={2}>A Person and their Pet</MenuItem>
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel id="demo-simple-select-label">Num of Players</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					width="full-width"
					value={numPlayers}
					label="Num"
					onChange={handleNumChange}
					sx={{ mb: 5 }}
				>
					<MenuItem value={2}>2 People</MenuItem>
					<MenuItem value={3}>3 People</MenuItem>
					<MenuItem value={4}>4 People</MenuItem>
				</Select>
			</FormControl>
			<Button variant="contained" onClick={handleSubmit}>
				Go
			</Button>
		</Box>,
		...inputList,
	]

	return stages[changed]
}

const Consequence2 = () => {
	const [activeWindow, setActiveWindow] = useState(null)
	const [story, setStory] = useState(1)
	const [numPlayers, setNumPlayers] = useState(2)
	const [storyOptions, setStoryOptions] = useState([[]])
	const [changed, setChanged] = useState(0)

	useEffect(() => {
		console.log(storyOptions)
	}, [storyOptions])

	const handleSubmit = () => {
		let finalOptions = []
		let options = []
		if (story !== '') {
			const chosenStory = story === 1 ? [...story1] : [...story1]

			const startPoint = chosenStory.length

			for (let i = startPoint - 1; i >= 0; i--) {
				const randomNum = Math.round(Math.random() * i)

				options.push(chosenStory[randomNum])
				chosenStory.splice(randomNum, 1)
			}

			while (options.length > 0) {
				finalOptions.push(options.splice(0, startPoint / numPlayers))
			}

			setStoryOptions(finalOptions)
			setChanged(changed + 1)
		}
	}

	return (
		<>
			<PlainPaper
				title="Story Time"
				content={
					<MultipleSelect
						handleSubmit={handleSubmit}
						story={story}
						setStory={setStory}
						numPlayers={numPlayers}
						setNumPlayers={setNumPlayers}
						changed={changed}
						setChanged={setChanged}
						storyOptions={storyOptions}
					/>
				}
			/>
		</>
	)
}

export default Consequence2
