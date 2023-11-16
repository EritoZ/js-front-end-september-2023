function phoneBook(book) {
    const obj = {}

    for (const personInfo of book) {
        const [name, phone] = personInfo.split(' ')
        obj[name] = phone
    }

    for (const name in obj) {
        console.log(`${name} -> ${obj[name]}`)
    }
}

phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344'])