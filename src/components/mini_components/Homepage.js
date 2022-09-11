import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { Container, Typography, Grid } from '@mui/material'

import toolList from '../important/toolList'
import ModalHome from './ModalHome'

export default function Homepage() {
	let navigate = useNavigate()

	const list = toolList.map((el) => {
		return (
			<Grid
				item
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				xs={3}
				sm={2}
				md={2}
				key={el.primary}
				textAlign="center"
			>
				<ModalHome content={el.secondary} button={el.icon} title={el.primary} />
				<Typography
					sx={{
						marginBottom: '10%',
						color: 'primary',
						// textShadow:
						// 	'1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
					}}
					variant="subtitle2"
				>
					{el.primary}
				</Typography>
			</Grid>
		)
	})

	return (
		<Container sx={{ marginTop: '10%', height: '100%' }}>
			<Grid container spacing={{ md: 2 }}>
				{list}
			</Grid>
		</Container>
	)
}

// export default function ResponsiveGrid() {
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//           {Array.from(Array(6)).map((_, index) => (
//             <Grid xs={2} sm={4} md={4} key={index}>
//               <Item>xs=2</Item>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   }
