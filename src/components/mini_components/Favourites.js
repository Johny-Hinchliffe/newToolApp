import { useEffect, useState } from 'react'
import { Container, Typography, Grid } from '@mui/material'

import toolList from '../important/toolList'
import ModalHome from './ModalHome'

export default function Favourites() {
    const [favourites, setFavourites] = useState([])

    const FAV_KEY = 'aReAllyG00dKeY19901203'

    useEffect(() => {
		const getFavourites = async () => {
			const favouritesStorage = JSON.parse(localStorage.getItem(FAV_KEY))
			setFavourites(favouritesStorage)
		}
		getFavourites()
	}, [])

	useEffect(() => {
		localStorage.setItem(FAV_KEY, JSON.stringify(favourites))
	}, [favourites])



	// Fetch tasks
	// const fetchFavourites = async () => {
	// 	const res = await fetch('http://localhost:5000/tasks')
	// 	const data = await res.json()
	// 	return data
	// }

	//Add Task
	const addFavourite = async (favourite) => {
		favourite.id = 1
		console.log(favourite)
		setFavourites([...favourites, favourites])
	}

	//Delete Task List
	const deleteFavourites = async (id) => {
		setFavourites(favourites.filter((favourite) => favourite.id !== id))
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
					favourite={true}
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
