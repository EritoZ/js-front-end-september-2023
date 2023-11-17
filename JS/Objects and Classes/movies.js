function movies(actions) {
    const movies = {};
    const actionsDict = {
        'addMovie': (x, y) => {
            movies[x] = {'name': x}
        },
        'directedBy': (x, y) => {
            movies.hasOwnProperty(x) ? movies[x]['director'] = y : null
        },
        'onDate': (x, y) => {
            movies.hasOwnProperty(x) ? movies[x]['date'] = y : null
        }
    };

    for (let actionData of actions) {
        let splitCommand = undefined
        let movieIndex = 0

        if (actionData.includes('addMovie')) {
            splitCommand = 'addMovie '
            movieIndex = 1
        } else if (actionData.includes('directedBy')) {
            splitCommand = ' directedBy '
        } else {
            splitCommand = ' onDate '
        }

        actionData = actionData.split(splitCommand)
        splitCommand = splitCommand.trim()

        actionsDict[splitCommand](actionData[movieIndex], actionData[1])
    }

    for (const movie in movies) {
        const itemsAmount = Object.values(movies[movie]).length
        if (itemsAmount === 3) {
            console.log(JSON.stringify(movies[movie]))
        }
    }
}

movies([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
])