function schoolRegister(arrayStudentInfo) {
    let studentInfoDict = {};

    arrayStudentInfo.forEach((studentInfo) => {
        let [nameInfo, gradeInfo, averageScoreInfo] = studentInfo.split(', ');
        let [name, grade, averageScore] = [nameInfo.split(': ')[1], parseInt(gradeInfo.split(': ')[1]),
            parseFloat(averageScoreInfo.split(': ')[1])];

        if (averageScore < 3) {
            return
        }

        const nextGrade = grade + 1;

        if (!studentInfoDict.hasOwnProperty(nextGrade)) {
            studentInfoDict[nextGrade] = {'students': [], 'sumGrade': 0};
        }

        studentInfoDict[nextGrade]['students'].push(name);
        studentInfoDict[nextGrade]['sumGrade'] += averageScore
    });

    studentInfoDict = Object.entries(studentInfoDict)
        .sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

    for (const [nextGrade, gradeInfo] of studentInfoDict) {
        const [arrayStudents, sumGrade] = [gradeInfo['students'], gradeInfo['sumGrade']];
        const averageGrade = sumGrade / arrayStudents.length;

        console.log(
`${nextGrade} Grade
List of students: ${arrayStudents.join(', ')}
Average annual score from last year: ${averageGrade.toFixed(2)}
`
        );
    }
}

schoolRegister([
'Student name: George, Grade: 5, Graduated with an average score: 2.75',
'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
'Student name: John, Grade: 9, Graduated with an average score: 2.90',
'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])