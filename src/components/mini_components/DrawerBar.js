import * as React from 'react'
import { Link } from 'react-router-dom'

import {
	Box,
	IconButton,
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	BottomNavigationAction,
} from '@mui/material'

import { Menu as MenuIcon } from '@mui/icons-material'
import { useEffect } from 'react'

export default function DrawerBar({
	menuList1,
	menuList2,
	anchor,
	drawerState,
	setDrawerState,
}) {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ ...state, [anchor]: open })
		setDrawerState(open)
	}

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Box textAlign="center">
				<Typography variant="h6">Tool List</Typography>
			</Box>
			<List>
				{menuList1.map((text) => (
					<ListItem key={text.primary} disablePadding>
						<Link
							to={`/${text.primary.split(' ').join('-').toLowerCase()}`}
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<ListItemButton>
								<ListItemIcon>{text.icon}</ListItemIcon>
								<ListItemText primary={text.primary} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
			<Divider />
			{/* <List>
				{menuList2.map((text) => (
					<ListItem key={text[0]} disablePadding>
						<Link
						to={`/${text[0].split(' ').join('-').toLowerCase()}`}
							style={{ textDecoration: 'none' }}
							>
							<ListItemButton>
							<ListItemIcon>{text[1]}</ListItemIcon>
							
								<ListItemText primary={text[0]} />
								</ListItemButton>
								</Link>
								</ListItem>
				))}
			</List> */}
		</Box>
	)
	useEffect(() => {
		if (drawerState) {
			setState({ ...state, [anchor]: true })
		}
	}, [drawerState])

	return (
		<React.Fragment key={anchor}>
			{/* <>
				<BottomNavigationAction
					icon={<MenuIcon />}
					onClick={toggleDrawer(anchor, true)}
				/>
			</> */}

			<Drawer
				anchor={anchor}
				open={state[anchor]}
				onClose={toggleDrawer(anchor, false)}
			>
				{list(anchor)}
			</Drawer>
		</React.Fragment>
	)
}
