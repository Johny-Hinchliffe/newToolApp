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

export default function BasicModal({ open, setOpen, results }) {
	const [pairCount, setPairCount] = useState(0)
	const [three, setThree] = useState(0)
	const [showNames, setShowNames] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = (event, reason) => {
		if (reason !== 'backdropClick') {
			setOpen(false)
		}
	}

	useEffect(() => {
		setShowNames(true)
	}, [])



	const nextPerson = () => {
		if (three < 2) {
			setThree(three + 1)
		} else if (pairCount === results.length - 1) {
			handleClose()
			setPairCount(0)
			setThree(0)
		} else {
			setThree(0)
			setPairCount(pairCount + 1)
		}
	}

	const startPicking = () => setShowNames(false)

	const content = results.map((el) => {
		return [
			<Typography id="modal-modal-title" variant="h6" component="h2">
				Pass the device to {el.buyer}
			</Typography>,
			<Typography id="modal-modal-title" variant="h6" component="h2">
				{el.buyer}, ensure nobody is looking!
			</Typography>,
			<Typography id="modal-modal-title" variant="h6" component="h2">
				You'll be buying a gift for {el.receiver}
			</Typography>,
		]
	})

	// const title = results.map((el) => {
	// 	return [
	// 		<Typography id="modal-modal-title" variant="h6" component="h2">
	// 			{el.buyer}'s Turn!
	// 		</Typography>,
	// 		<Typography id="modal-modal-title" variant="h6" component="h2">
	// 			Quick, Hide!
	// 		</Typography>,
	// 		<Typography id="modal-modal-title" variant="h6" component="h2">
	// 			Don't Forget
	// 		</Typography>,
	// 	]
	// })

	const button = results.map((el) => {
		return ['Next', 'Ready?', 'Hide']
	})

	const allNames = results.map((el, index) => (
		<Typography textAlign="left" variant="h6">{index+1}. {el.buyer}</Typography>
	))
	const initialButton = (
        <Box sx={{display: 'flex'}}>
            <Button
			sx={{ mt: 5, mr:5 }}
			onClick={handleClose}
			variant="contained"
			endIcon={<SendIcon />}
            color='error'
            >
			Cancel
		</Button>

		<Button
			sx={{ mt: 5, height: 50 }}
            
			onClick={startPicking}
			variant="contained"
			endIcon={<SendIcon />}
            >
			Ready?
		</Button>
            </Box>
	)

	const initialTitle = (
		<Typography sx={{mb: 3}} id="modal-modal-title" variant="h5" component="h2">
			Is everyone accounted for?
		</Typography>
	)

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{showNames ? initialTitle : null}

					<div></div>
					{showNames ? allNames : content[pairCount][three]}

                    
					{showNames ? (
						initialButton
					) : (
						<Button
							sx={{ mt: 5 }}
							onClick={nextPerson}
							variant="contained"
							endIcon={<SendIcon />}
						>
							{button[pairCount][three]}
						</Button>
					)}
				</Box>
			</Modal>
		</div>
	)
}
