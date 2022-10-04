import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import DeleteIcon from '@mui/icons-material/Delete'

import Stack from '@mui/material/Stack'
import SleddingIcon from '@mui/icons-material/Sledding';
import CloseIcon from '@mui/icons-material/Close';

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


	const handleClose = (event, reason) => {
		if (reason !== 'backdropClick') {
			
			setOpen(false)
		}
	}

	

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


	const content = results.map((el) => {
		return [
            <>
			<Typography
            sx={{fontWeight: 'bold'}}
            textAlign="center"
            id="modal-modal-title"
            variant="h4"
            component="h2"
			>
				Pass the device to
			</Typography>
            <Typography
            sx={{fontWeight: 'bold'}}
            textAlign="center"
            id="modal-modal-title"
            variant="h4"
            component="h2"
			>
				{el.buyer}
			</Typography>
                </>
            
            ,
            <>
			<Typography
				textAlign="center"
				id="modal-modal-title"
				variant="h4"
				component="h2"
                >
				{el.buyer},
			</Typography>
            <Typography
				textAlign="center"
				id="modal-modal-title"
				variant="h4"
				component="h2"
			>
				ensure nobody is looking!
			</Typography>
                </>
            ,<>
			<Typography
				textAlign="center"
				id="modal-modal-title"
				variant="h4"
				component="h2"
			>   You're buying a gift for
			</Typography>
            <Typography
            sx={{fontWeight: 'bold', textDecoration: 'underline'}}
            textAlign="center"
            id="modal-modal-title"
            variant="h4"
            component="h2"
        >   {el.receiver}
        </Typography></>,
		]
	})

   

	// const title = results.map((el) => {
	// 	return [
	// 		<Typography sx={{mb: 3}} id="modal-modal-title" variant="h6" component="h2">
	// 			{/* {el.buyer}'s Turn! */}
	// 		</Typography>,
	// 		<Typography sx={{mb: 3, fontWeight: 'bold', textDecoration: 'underline'}} id="modal-modal-title" variant="h5" component="h2">
	// 			Quick, Hide!
	// 		</Typography>,
	// 		<Typography sx={{mb: 3, fontWeight: 'bold', textDecoration: 'underline'}} id="modal-modal-title" variant="h6" component="h2">
	// 			You'll be buying a gift for..
	// 		</Typography>,
	// 	]
	// })

	const button = results.map((el) => {
		return ['Next', 'Ready?', 'Next']
	})

	const allNames = results.map((el, index) => (
		<Typography textAlign="left" variant="h6">
			{index + 1}. {el.buyer}
		</Typography>
	))
	const initialButton = (
		<Box sx={{ display: 'flex' }}>
			<Button
				sx={{ mt: 5, mr: 5 }}
				onClick={handleClose}
				variant="contained"
				endIcon={<CloseIcon />}
				color="error"
			>
				Cancel
			</Button>

			<Button
				sx={{ mt: 5, height: 50 }}
				// onClick={startPicking}
				variant="contained"
				endIcon={<SleddingIcon />}
			>
				Ready?
			</Button>
		</Box>
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
				
                    {/* {showNames ? null : title[pairCount][three]} */}

				
					{content[pairCount][three]}

					{(
						<Button
							sx={{ mt: 5 }}
							onClick={nextPerson}
							variant="contained"
							endIcon={<SleddingIcon />}
						>
							{button[pairCount][three]}
						</Button>
					)}
				</Box>
			</Modal>
		</div>
	)
}
