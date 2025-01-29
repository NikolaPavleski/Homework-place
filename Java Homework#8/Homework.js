fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then(response => response.json())
    .then(students => {
        const studentsHigherThan3 = students.filter(student => student.averageGrade > 3);
        console.log('Students with average grade higher than 3:', studentsHigherThan3);
        const femaleStudentsWithGrade5 = students.filter(student => student.gender === 'Female' && student.averageGrade === 5)
            .map(student => student.firstName);
        console.log('Female student names with average grade of 5:', femaleStudentsWithGrade5);
        const maleStudentsInSkopjeOver18 = students.filter(student => 
            student.gender === 'Male' && student.city === 'Skopje' && student.age > 18)
            .map(student => `${student.firstName} ${student.lastName}`);
        console.log('Male students in Skopje over 18:', maleStudentsInSkopjeOver18);
        const femaleStudentsOver24 = students.filter(student => student.gender === 'Female' && student.age > 24);
        const averageGradesOfFemalesOver24 = femaleStudentsOver24.map(student => student.averageGrade);
        console.log('Average grades of female students over 24:', averageGradesOfFemalesOver24);
        const maleStudentsWithBAndGradeOver2 = students.filter(student => 
            student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2);
        console.log('Male students with name starting with B and average grade over 2:', maleStudentsWithBAndGradeOver2);
    })