import { useState, useEffect } from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import { TransitionGroup } from 'react-transition-group'

const KEY = 'plAhYreDfjj322£$'

function renderItem({ item, handleRemoveFruit }) {
	return (
		<ListItem
			secondaryAction={
				<IconButton
					edge="end"
					aria-label="delete"
					title="Delete"
					onClick={() => handleRemoveFruit(item)}
				>
					<DeleteIcon />
				</IconButton>
			}
		>
			<ListItemText primary={item} />
		</ListItem>
	)
}

export default function TransitionGroupExample() {
	const [items, setItems] = useState([])
	const [holding, setHolding] = useState([])
	
	useEffect(() => {
		const getItems = async () => {
			const allItems = JSON.parse(localStorage.getItem(KEY))
			console.log('items', items)
			console.log('all items', allItems)
			setItems(allItems ? allItems : [])
			setHolding(allItems ? allItems : [])
		}
		getItems()
		console.log(getItems())
		console.log('useeffect on launch')
	}, [])

	useEffect(() => {
		console.log('items', items)

		localStorage.setItem(KEY, JSON.stringify(items))
		console.log('use effect on items')
		console.log('items', items)
		console.log('all items', holding)
	}, [items])

	const handleAddFruit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		setItems(items.concat(data.get('item')))
		console.log('add fruit')
		// const nextHiddenItem = FRUITS.find((i) => !items.includes(i))
		// if (nextHiddenItem) {
		// 	setItems((prev) => [nextHiddenItem, ...prev])
		// }
	}

	const handleRemoveFruit = (item) => {
		setItems((prev) => [...prev.filter((i) => i !== item)])
		console.log('remove fruit')
	}

	const addFruitButton = (
		<>
			<Button variant="contained" type="submit">
				Add Item to Basket
			</Button>
		</>
	)

	return (
		<Container
			sx={{
				display: 'flex',
				alignItems: 'center',
				height: '100vh',
				flexDirection: 'column',
			}}
			component="form"
			onSubmit={handleAddFruit}
		>
			<Typography textAlign="center" variant="h4" margin="25px">
				Shopping List
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<TextField
					variant="outlined"
					name="item"
					label="Add item"
					sx={{ mb: '5px' }}
				/>
				{addFruitButton}
			</Box>
			<Box sx={{ mt: 1 }}>
				<List>
					<TransitionGroup>
						{items
							.map((item) => (
								<Collapse key={item}>
									{renderItem({ item, handleRemoveFruit })}
								</Collapse>
							))
							.reverse()}
					</TransitionGroup>
				</List>
			</Box>
		</Container>
	)
}
