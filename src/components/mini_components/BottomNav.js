import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MenuIcon from '@mui/icons-material/Menu'
import Paper from '@mui/material/Paper'

import Button from '@mui/material/Button'
import CancelIcon from '@mui/icons-material/Cancel'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

import Modal from './ModalBasic'

export default function BottomNav({ Content1, Content2, Drawer, drawerList }) {
	const [drawerState, setDrawerState] = useState(false)
	const [value, setValue] = useState(0)
	const [open, setOpen] = useState(false)

	const ref = useRef(null)
	let navigate = useNavigate()

	const content = () => {
		if (value === 0) {
			return Content1
		}
		if (value === 1) {
			return Content2
		}
	}

	const homeNav = () => {
		if (window.location.pathname == '/') {
			return
		} else {
			setOpen(true)
		}
	}

	const handleSubmit = () => {
		navigate('/')
		setOpen(false)


	}

	const modalContent = (
		<Box
			sx={{ mt: 5, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
		>
			<Button
				variant="contained"
				endIcon={<HomeIcon />}
				onClick={handleSubmit}
			>
				Go
			</Button>
			<Button 
				variant="outlined"
				endIcon={<CancelIcon />}
				onClick={() => setOpen(false)}
			>
				Stay
			</Button>
		</Box>
	)

	return (
		<Box sx={{ pb: 7 }} ref={ref}>
			<CssBaseline />
			{content()}
			{/* <List>
				{toolList.map(({ primary, secondary, icon }, index) => (
					<ListItem button key={index + icon}>
						<ListItemAvatar>
							<Avatar alt="Profile Picture">{icon}</Avatar>
						</ListItemAvatar>
						<ListItemText primary={primary} secondary={secondary} />
					</ListItem>
				))}
			</List> */}
			<Paper
				sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue)
					}}
				>
					<BottomNavigationAction
						label="Home"
						onClick={homeNav}
						icon={<HomeIcon />}
					/>
					<BottomNavigationAction
						label="Favourites"
						// onClick={() => navigate('/favourites')}
						icon={<FavoriteIcon />}
					/>
					<BottomNavigationAction
						label="Menu"
						icon={<MenuIcon />}
						onClick={() => setDrawerState(true)}
					/>
					<Drawer
						anchor={'right'}
						menuList1={drawerList}
						drawerState={drawerState}
						setDrawerState={setDrawerState}
					/>
				</BottomNavigation>
				<Modal
					open={open}
					setOpen={setOpen}
					content={modalContent}
					title="Go to the Homescreen"
				/>
			</Paper>
		</Box>
	)
}
