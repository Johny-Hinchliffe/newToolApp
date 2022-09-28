import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	display: 'flex',
	justifyItems: 'flex-end',
	alignItems: 'center',
	flexDirection: 'column',
}

export default function BasicModal({ open, setOpen, results, onClick, content, title }) {

	const handleOpen = () => setOpen(true)

    const handleClose = () =>  setOpen(false)
	
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{title}

					<div></div>
					<Box>{content}</Box>

					<Button
						sx={{ mt: 5 }}
						onClick={onClick}
						variant="contained"
						endIcon={<SendIcon />}
					>
						Go
					</Button>
				</Box>
			</Modal>
		</div>
	)
}
