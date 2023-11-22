function softuniStudents(arrayStrings) {
    class Course {
        constructor(name, capacity) {
            this.name = name;
            this.capacity = capacity;
            this.students = [];
        }
    }

    class Student {
        constructor(username, email, credits) {
            this.username = username;
            this.email = email;
            this.credits = credits;
        }
    }

    class SoftUni {
        constructor() {
            this.courses = {};
        }

        addCourse(courseName, courseCapacity) {
            if (this.courses.hasOwnProperty(courseName)) {
                this.courses[courseName].capacity += courseCapacity;
                return;
            }

            this.courses[courseName] = new Course(courseName, courseCapacity);
        }

        addStudent(courseName, studentUsername, studentEmail, studentCredits) {
            if (!this.courses.hasOwnProperty(courseName)) {
                return;
            }

            if (this.courses[courseName].capacity === 0) {
                return;
            }

            const newStudent = new Student(studentUsername, studentEmail, studentCredits)

            this.courses[courseName].students.push(newStudent)
            this.courses[courseName].capacity -= 1
        }

        printCourses() {
            const courses = Object.entries(this.courses)
                .sort((a, b) => b[1].students.length - a[1].students.length);

            for (const [courseName, course] of courses) {
                course.students = course.students.sort((a, b) => b.credits - a.credits);

                console.log(`${courseName}: ${course.capacity} places left`)
                course.students.forEach(student => {
                    console.log(`--- ${student.credits}: ${student.username}, ${student.email}`)
                })
            }
        }
    }

    const softUni = new SoftUni();

    for (const command of arrayStrings) {
        if (command.includes(': ')) {
            const [courseName, capacity] = command.split(': ');

            softUni.addCourse(courseName, parseInt(capacity));

        } else {
            const username = command.match(/.+(?=\[)/);
            const credits = parseInt(command.match(/(?<=\[).+(?=])/));
            const email = command.match(/(?<=email ).*(?= j)/);
            const courseName = command.match(/(?<=joins ).+/);

            softUni.addStudent(courseName, username, email, credits);
        }
    }

    softUni.printCourses()
}

softuniStudents(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore'])

