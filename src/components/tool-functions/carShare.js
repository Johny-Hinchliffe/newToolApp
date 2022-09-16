import {Typography} from '@mui/material'

const carShare = (result) => {
	const [distance, fuelPrice, mpg, people] = result

	
	const milesPerLitre = mpg / 4.546 //8.183
	const poundPerLitre = fuelPrice / 100 / milesPerLitre

	const journeyCost = distance * poundPerLitre
	const round = (el) => Math.ceil(el * 10) / 10
	const bigRound = (el) => Math.ceil(el * 100) / 100

	// console.log('334'.split('.').length)

	const addZeros = (el) => {
		el = bigRound(el)
		const splitted = String(el).split('.')
		if (splitted.length === 1) {
			return splitted + '.00'
		}
		if (splitted.length > 1 && splitted[1].length === 1) {
			return splitted.join('.') + '0'
		} else return splitted.join('.')
	}

   const journeyCost2 = addZeros(round(journeyCost))
   const costPerPerson = addZeros(round(journeyCost) / people)
   const costPerPersonPlusDriver = addZeros(
        bigRound(round(journeyCost) / (Number(people) + 1))
    )
   const costPerMile = addZeros(bigRound(poundPerLitre))

	
	return {
            journeyCost2,
            costPerPerson,
            costPerPersonPlusDriver,
            costPerMile,
            question: `A ${distance} mile journey ${people > 1 ? `split between ${people} people` : 'on your own'} will cost;`
    
            }
}

export default carShare
