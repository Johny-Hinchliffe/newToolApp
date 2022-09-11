import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Avatar, Modal } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '.5px solid #000',
	borderRadius: '20px',
	boxShadow: 15,
	p: 4,
	maxWidth: '70vw',
}

export default function BasicModal({ content, title, button }) {
	const [open, setOpen] = React.useState(false)
	let navigate = useNavigate()

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Avatar
				sx={{
					bgcolor: 'white',
					height: '60px',
					width: '60px',
					borderRadius: '20px',
					boxShadow: '3px 3px 5px #000',
					marginBottom: '5px',
					border: '0.1px solid grey',
				}}
				variant="square"
				onClick={handleOpen}
			>
				{button}
			</Avatar>

			{content ? (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					elevation={24}
				>
					<Box sx={style}>
						<Typography
							id="modal-modal-title"
							variant="h5"
							component="h2"
							textAlign="center"
						>
							{title}
						</Typography>
						<Typography
							id="modal-modal-description"
							textAlign="center"
							sx={{ mt: 2 }}
						>
							{content}
						</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2}}>
							<Button variant='contained' endIcon={<RocketLaunchIcon />} onClick={() => navigate(`/${title.split(' ').join('-').toLowerCase()}`)}>
								<Typography>
									Launch
								</Typography>	
							</Button>
						</Box>
					</Box>
				</Modal>
			) : (
				<div></div>
			)}
		</div>
	)
}
