async function fetchStudentData() {
const response = await fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json');
const students = await response.json();
const studentsCopy = [...students];
const averageAge = studentsCopy.reduce((sum, student) => sum + student.age, 0) / studentsCopy.length;
const averageGrade = studentsCopy.reduce((sum, student) => sum + student.averageGrade, 0) / studentsCopy.length;
document.getElementById('averageAge').textContent = `Average Age: ${averageAge.toFixed(2)}`;
document.getElementById('averageGrade').textContent = `Average Grade: ${averageGrade.toFixed(2)}`;
const over60 = studentsCopy.filter(student => student.age > 60).length;
const under30 = studentsCopy.filter(student => student.age < 30).length;
document.getElementById('over60Under30Count').textContent = `Students over 60: ${over60}, Students under 30: ${under30}`;
const over30WithGradeAbove4 = studentsCopy.filter(student => student.age > 30 && student.averageGrade >= 4)
.map(student => `${student.firstName} ${student.lastName}, City: ${student.city}`);
document.getElementById('studentsOver30WithGradeAbove4').textContent = `Students over 30 with grade >= 4: \n${over30WithGradeAbove4.join('\n')}`;
const arthurCadore = studentsCopy.find(student => student.firstName === 'Arthur' && student.lastName === 'Cadore');
document.getElementById('arthurCadoreInfo').textContent = arthurCadore ? `Arthur Cadore: ${JSON.stringify(arthurCadore)}` : 'Arthur Cadore not found';
const oldestStudent = studentsCopy.reduce((oldest, student) => student.age > oldest.age ? student : oldest);
const youngestStudent = studentsCopy.reduce((youngest, student) => student.age < youngest.age ? student : youngest);
document.getElementById('oldestYoungestInfo').textContent = `Oldest: ${oldestStudent.firstName} ${oldestStudent.lastName}, Age: ${oldestStudent.age} \nYoungest: ${youngestStudent.firstName} ${youngestStudent.lastName}, Age: ${youngestStudent.age}`;
const longLastNames = studentsCopy.filter(student => student.lastName.length > 8)
.map(student => `${student.firstName} ${student.lastName}`);
document.getElementById('studentsWithLongLastNames').textContent = `Students with last name longer than 8 characters: \n${longLastNames.join('\n')}`;
const top10BestStudents = studentsCopy.sort((a, b) => b.averageGrade - a.averageGrade)
.slice(0, 10)
.map(student => `${student.firstName} ${student.lastName}, Grade: ${student.averageGrade}`);
document.getElementById('top10BestStudents').textContent = `Top 10 students by average grade: \n${top10BestStudents.join('\n')}`;
const hasGrade1 = studentsCopy.some(student => student.averageGrade === 1);
const allAdults = studentsCopy.every(student => student.age > 18);
document.getElementById('hasAverageGrade1').textContent = `Has a student with grade 1: ${hasGrade1 ? 'Yes' : 'No'}`;
document.getElementById('allAdults').textContent = `All students are adults: ${allAdults ? 'Yes' : 'No'}`;
}
fetchStudentData();