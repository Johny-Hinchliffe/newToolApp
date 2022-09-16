import React from 'react'

import { TextField, Container } from '@mui/material'

const NotePad = () => {
	return (
		<>
			<Container>
				<TextField
					multiline
					variant="standard" // <== changed this
					margin="normal"
					fullWidth
					id="note"
					name="note"
					autoFocus
					placeholder="Notes..."
					InputProps={{
						disableUnderline: true, // <== added this
					}}
					//sx={{ marginTop: '80px' }}
				/>
			</Container>
		</>
	)
}

export default NotePad
