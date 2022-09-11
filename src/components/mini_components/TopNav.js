import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

import logo from '../../images/logo.png'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))

export default function TopNav({ logo, title }) {
	const [search, setSearch] = useState()
	let navigate = useNavigate()

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				color="inherit"
				position="static"
				sx={{
					width: '100vw',
				}}
			>
				<Toolbar>
					<Box
						component="img"
						onClick={() => navigate(`/`)}
						sx={{
							height: 55,
							width: 62,
							maxHeight: { xs: 40, md: 49 },
							maxWidth: { xs: 45, md: 56 },
						}}
						alt={`${title} logo`}
						src={logo}
						
					/>
					<Typography
						variant="h5"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
					>
						{title}
					</Typography>
					{/* <Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
							onChange={(event) => {
								setSearch(event.target.value)
							}}
						/>
					</Search> */}
				</Toolbar>
			</AppBar>
		</Box>
	)
}
