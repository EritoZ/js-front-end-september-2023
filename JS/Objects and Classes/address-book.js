function addressBook(data) {
    const obj = {}

    for (const personInfo of data) {
        const [name, address] = personInfo.split(':')
        obj[name] = address
    }

    let arrayObj = Object.entries(obj)
    arrayObj = arrayObj.sort((a, b) => a[0].localeCompare(b[0]))

    for (const nameAndAdress of arrayObj) {
        console.log(`${nameAndAdress[0]} -> ${nameAndAdress[1]}`)
    }
}

addressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])