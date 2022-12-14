import { useEffect, useState } from 'react'
import { Container, Typography, Grid } from '@mui/material'

import toolList from '../important/toolList'
import ModalHome from './ModalHome'

export default function Homepage() {
	const [favourites, setFavourites] = useState([])
	const [newFav, setNewFav] = useState()

	const FAV_KEY = 'aReAllyG00dKeY19901203'
	
	useEffect(() => {
		const getFavourites = async () => {
			const favouritesStorage = JSON.parse(localStorage.getItem(FAV_KEY))
			setFavourites(favouritesStorage)
			console.log(favouritesStorage)
		}
		getFavourites()
		
		
	}, [])
	
	console.log(favourites)
	

	useEffect(() => {

		console.log(favourites)
		localStorage.setItem(FAV_KEY, JSON.stringify(favourites))
	}, [favourites])

	// Fetch tasks
	// const fetchFavourites = async () => {
	// 	const res = await fetch('http://localhost:5000/tasks')
	// 	const data = await res.json()
	// 	return data
	// }


	if (window.location.pathname === '/favourites') {
		
	}
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
				<ModalHome
					content={el.secondary}
					button={el.icon}
					title={el.primary}
					favourites={favourites}
					setFavourites={setFavourites}
					newFav={newFav}
					setNewFav={setNewFav}
					KEY={FAV_KEY}
				/>
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
