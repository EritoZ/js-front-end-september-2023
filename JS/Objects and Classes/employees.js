function employees(employeeData) {
    const object = employeeData.reduce((obj, x) => {
          obj[x] = x.length
          return obj
        }, {})

    for (const person in object) {
        console.log(`Name: ${person} -- Personal Number: ${object[person]}`)
    }
}

employees([
'Samuel Jackson',
'Will Smith',
'Bruce Willis',
'Tom Holland'
])