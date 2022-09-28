const personPicker = ([...names]) => {
    const allNames = names


    // return {
    // 	person2,
    // 	person1,
    // 	allNames,
    // }
    const results = names.map(name => {
        // Knocks of {name} from {allNames}
        console.log('name comes in', name)
        var index = allNames.indexOf(name)
        if (index !== -1) {
            allNames.splice(index, 1)
        }

        const name2 = allNames[Math.floor(Math.random() * allNames.length)]

        var index = allNames.indexOf(name2)
        if (name2 !== -1) {
            allNames.splice(index, 1)
        }

        return [name, name2]




    })
    
    return results
}