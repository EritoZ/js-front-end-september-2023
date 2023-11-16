function meetings(appointments) {
    const meetings = {}

    for (const appointment of appointments) {
        const [day, person] = appointment.split(' ')

        if (day in meetings) {
            console.log()
        }
    }
}

meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])