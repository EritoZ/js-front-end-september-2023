function meetings(appointments) {
    const meetings = {}

    for (const appointment of appointments) {
        const [day, person] = appointment.split(' ')

        if (day in meetings) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = person
            console.log(`Scheduled for ${day}`)
        }
    }

   for (const meeting in meetings) {
       console.log(`${meeting} -> ${meetings[meeting]}`)
   }
}

meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])
