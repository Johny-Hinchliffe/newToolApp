import {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import PlainPaper from '../mini_components/PlainPaper'


const MultipleSelect = ({story, setStory}) => {
	

	const handleChange = (event) => {
	  setStory(event.target.value);
	};
  
	return (
	  <Box sx={{ minWidth: 120 }}>
		<FormControl fullWidth>
		  <InputLabel id="demo-simple-select-label">Story Choice</InputLabel>
		  <Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={story}
			label="Story Choice"
			onChange={handleChange}
		  >
			<MenuItem value={1}>2 People</MenuItem>
			<MenuItem value={2}>A Person and their Pet</MenuItem>
			
		  </Select>
		</FormControl>
	  </Box>
	);
  }

const Consequence2 = () => {
	const [story, setStory] = useState('');

	useEffect(() => {
		console.log(story)
	},[story])
	
  return (
	<PlainPaper tabs={<MultipleSelect story={story} setStory={setStory}/>}/>
  )
}

export default Consequence2
