function formatGrade(grade) {
    const gradeCheck = {
        3: `Fail (2)`,
        3.5: `Poor (${grade.toFixed(2)})`,
        4.5: `Good (${grade.toFixed(2)})`,
        5.5: `Very good (${grade.toFixed(2)})`,
    }
    for (const gradeMaximum in gradeCheck) {
        if (grade < gradeMaximum) {
            console.log(gradeCheck[gradeMaximum])
            return
        }
    }
    console.log(`Excellent (${grade.toFixed(2)})`)
}

formatGrade(2.6)