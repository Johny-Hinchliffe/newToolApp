const ageDiff = (result) => {
	const [nameOne, bdayOne, nameTwo, bdayTwo] = result

	const date = new Date().getFullYear()
	const olderBirth = Number(bdayOne < bdayTwo ? bdayOne : bdayTwo)
	const youngerBirth = Number(bdayOne > bdayTwo ? bdayOne : bdayTwo)
	const olderName = bdayOne < bdayTwo ? nameOne : nameTwo
	const youngerName = bdayOne > bdayTwo ? nameOne : nameTwo
	const diff = Number(youngerBirth - olderBirth)
	const year = diff * 2 + olderBirth
	const olderAge = year - olderBirth
	const youngerAge = year - youngerBirth

	let answer = ''
	let question = ''

	if(nameOne && bdayOne && nameTwo && bdayTwo){
		answer =
			date > year
				? `
	  In ${year} ${youngerName} was ${youngerAge} and ${olderName} was double their age at ${olderAge}`
				: `In ${year} ${youngerName} will be ${youngerAge} and ${olderName} will be double their age at ${olderAge}`
	
	
				question = `When will ${olderName} be double ${youngerName}${youngerName.split('')[youngerName.split('').length -1] === 's' ? "'" : "'s"} age?`
	
				return { question, answer}
		
	}else return {question, answer}

}

export default ageDiff
