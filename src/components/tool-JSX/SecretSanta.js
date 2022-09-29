import { useState } from 'react'

import { TextField, Typography, Box, IconButton, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import PlainPaper from '../mini_components/PlainPaper'
import Modal from '../mini_components/ModalNoButton'
import BasicModal from '../mini_components/BasicModal'

const SecretSanta = () => {
	const [santaSets, setSantaSets] = useState([[[]]])
	const [open, setOpen] = useState(false)

	const santaPicker = (allNames) => {
		const namesfirst = allNames.split(',').map((el) => el.trim())
		const names = namesfirst.map(
			(string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
		)

		const receiversList = [...names]
		const results = names.map((buyer) => {
			let buyerIncluded = false
			const index = receiversList.indexOf(buyer)
			if (index !== -1) {
				receiversList.splice(index, 1)
				buyerIncluded = true
			}

			const receiver =
				receiversList[Math.floor(Math.random() * receiversList.length)]

			const receiverIndex = receiversList.indexOf(receiver)
			if (receiverIndex !== -1) {
				receiversList.splice(receiverIndex, 1)
			}

			if (buyerIncluded) {
				receiversList.push(buyer)
			}

			return { buyer, receiver }
		})

		return results
	}

	//     const DynamicField = () => {

	//         let fieldLi
	//         const addField = () => {
	//         console.log('added')
	//     }

	//     const content = (
	//         <>
	//         <IconButton onClick={addField}><AddIcon color='primary'/></IconButton>
	//              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
	//         </>
	//     )

	//     return content

	// }

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		const allPlayers = data.get('names')

		if (
			allPlayers.split(',').length < 2 &&
			allPlayers
				.split(',')
				.map((el) => el.replace(/\s+/g, ''))
				.filter((el) => el !== '')
		) {
			console.log('Enter more names')
			return
		} else {
			let answer = [{ receiver: undefined }]

			while (
				answer.filter((el) => el.receiver === undefined).length > 0 ||
				answer.filter(
					(el) =>
						(el.buyer === 'Johny' && el.receiver === 'Bri') ||
						(el.buyer === 'Bri' && el.receiver === 'Johny') ||
						(el.buyer === 'Johny' && el.receiver === 'Brianna') ||
						(el.buyer === 'Brianna' && el.receiver === 'Johny') ||
						(el.buyer === 'Michael' && el.receiver === 'Laura') ||
						(el.buyer === 'Laura' && el.receiver === 'Michael') ||
						(el.buyer === 'Mum' && el.receiver === 'Matt') ||
						(el.buyer === 'Matt' && el.receiver === 'Mum')
				) > 0
			) {
				answer = santaPicker(allPlayers)
			}

			setSantaSets(answer)
			setOpen(true)
		}
	}

	const content = (
		<>
			<TextField
				fullWidth
				label="Name1, Name2, Name3, etc"
				id="fullWidth"
				name="names"
			/>
		</>
	)

	return (
		<PlainPaper
			title={'Secret Santa'}
			button="Santa Time"
			buttonType="submit"
			boxType="form"
			content={content}
			onSubmit={handleSubmit}
			modal={<Modal open={open} setOpen={setOpen} results={santaSets} />}
		/>
	)
}

export default SecretSanta
