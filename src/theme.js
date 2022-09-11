import { createTheme } from '@mui/material/styles'
import { green, deepPurple, purple, blue, grey } from '@mui/material/colors'

const theme = createTheme({
	mode: 'dark',
	// palette: {
	// 	primary: {
	// 		main: '#CDF0EA',
	// 	    light: grey[100],
	// 		dark: grey[900]
	// 	}
	// 	secondary: { 
	// 		main: purple[800]
	// 	},
		// background: {
		// 	default: 'linear-gradient(to right bottom, #430089, #82ffa1)'
		//   },
	// 	text: { 
	// 		primary: grey[700]
	// 	}
	// },
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		
	},
})

export default theme
