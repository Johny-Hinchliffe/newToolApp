const whosTurn = (args) => {
   if(args.length === 0){
    return
   }

	const [names, action] = args
	const randomNum = Math.round(Math.random() * (names.split(',').length - 1))
	const chosenPerson = names.split(',')[randomNum]

	return `It's ${chosenPerson}'s turn to ${action.toLowerCase()}`
}

export default whosTurn
