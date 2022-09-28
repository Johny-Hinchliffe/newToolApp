import { useState } from 'react'
import { Typography, Button, Box, ButtonGroup } from '@mui/material'
import PlainPaper from '../mini_components/PlainPaper'
import Loader from '../mini_components/Loader'

const TheOfficeGame = () => {
	const [quote, setQuote] = useState('Ready to Laugh?')
    const [answer, setAnswer] = useState()
    const [options, setOptions] = useState()

	const quoteGenerator = async () => {
		const config = {
			headers: {
				Accept: 'application/json',
			},
		}
		setQuote('Loader')
		const res = await fetch(
			'https://www.officeapi.dev/api/quotes/random',
			config
		)
        const options = await fetch(
			'https://www.officeapi.dev/api/characters',
			config
		)
        let answerOptions = await options.json()
		const data = await res.json()

        const result = []
        
       //result.push(Math.round(Math.random()*28))

    
       function myRandomInts(quantity, max){
        const arr = []
        while(arr.length < quantity){
          var candidateInt = Math.floor(Math.random() * max) + 1
          if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
        }
      return(arr)
      }
      

      const allOptions = myRandomInts(3, 28).map(el => {
        const option
		 = answerOptions.data[el]
        return `${option.firstname} ${option.lastname}`
      })

      console.log(allOptions)

      
   
            
        
        
        // const option = answerOptions.data[Math.round(Math.random()*28)]
        // console.log(`${option.firstname} ${option.lastname}` )

         
		setAnswer(data.data.character.firstname + ' ' + data.data.character.lastname)
        setOptions(data.data.character.firstname + ' ' + data.data.character.lastname)
		setTimeout(() => {
			setQuote(data.data.content)
		}, 1000)
	}

	const layout = (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyItems: 'space-between',
					alignContent: 'space-between',
					flexDirection: 'column',
				}}
			>
	
				<Typography
					textAlign="center"
					variant="h5"
					sx={{ alignSelf: 'center', justifySelf: 'center' }}
				>
					{quote === 'Loader' ? <Loader text={'Getting another quote'} /> : quote}
				</Typography>
			</Box>
		</>
	)

	return (
		<>
			<PlainPaper
				title={'The Office Quotes'}
				content={layout}
				func={quoteGenerator}
				button={'Get a Quote'}
                otherButton={<Box>
                    <ButtonGroup
                            sx={{ width: '100%' }}
                            aria-label="outlined primary button group"
                        >
                            <Button sx={{ width: '100%' }}>{answer}</Button>
                            <Button sx={{ width: '100%' }}>Dwight Shrut</Button>
                        </ButtonGroup>
                        <ButtonGroup
                            sx={{ width: '100%' }}
                            aria-label="outlined primary button group"
                        >
                            <Button sx={{ width: '100%' }}>Jim Halbort</Button>
                            <Button sx={{ width: '100%' }}>Pam Pammy</Button>
                        </ButtonGroup>
                    </Box>}
           
			/>
		</>
	)
}

export default TheOfficeGame
