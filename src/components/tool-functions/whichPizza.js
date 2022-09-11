const whichPizza = (result) => {
	const [quanL, sizeL, quanS, sizeS] = result

	const question = `${quanL || '___'} x ${sizeL || '___'}" ${
		quanL > 1 ? 'pizzas' : 'pizza'
	} or ${quanS || '___'} x ${sizeS || '___'}" ${
		quanS > 1 ? 'pizzas' : 'pizza'
	}?`

	const largeArea = Math.pow(sizeL / 2, 2) * (quanL * Math.PI)
	const smallArea = Math.pow(sizeS / 2, 2) * (quanS * Math.PI)

	const percentL = Math.floor(((largeArea - smallArea) / smallArea) * 100)

	const percentS = Math.floor(((smallArea - largeArea) / largeArea) * 100)

	const slicesL = Math.round(8 * (percentL / 100))
	const slicesS = Math.round(8 * (percentS / 100))

	if (quanL === quanS && sizeL === sizeS) {
		return { question, answer: 'Obviously they yield the same amount of pizza' }
	} else if (percentL === 0 || percentS === 0) {
		return {
			question,
			answer: `They pretty much give you a the same amount of pizza but the bigger one would have less crust`,
		}
	} else if (largeArea > smallArea) {
		return {
			question,
			answer: `${quanL} x ${sizeL}" ${
				quanL > 1 ? 'pizzas' : 'pizza'
			} would give you ${percentL}% more pizza. That's basically ${slicesL} extra ${
				slicesL > 1 ? 'slices' : 'slice'
			}!`,
		}
	} else {
		return {
			question,
			answer: `${quanS} x ${sizeS}" ${
				quanS > 1 ? 'pizzas' : 'pizza'
			} would give you ${percentS}% more pizza.  That's basically ${slicesS} extra ${
				slicesS > 1 ? 'slices' : 'slice'
			}!`,
			pizza: {
				bestOption: {
					quantity: quanL,
					size: sizeL,
					percentage: percentL
				},
				worstOption: {
					quantity: quanS,
					size: sizeS,
					percentage: percentS
				}
			}
		}
	}
}

export default whichPizza
