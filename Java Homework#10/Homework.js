class Academy {
    constructor(name, start, end) {
        this.name = name;
        this.students = [];
        this.subjects = [];
        this.start = start;
        this.end = end;
        this.numberOfClasses = this.subjects.length * 10;
    }
    printStudents() {
        console.log(`Students in ${this.name}:`);
        this.students.forEach(student => {
            console.log(`${student.firstName} ${student.lastName}`);
        });
    }
    printSubjects() {
        console.log(`Subjects in ${this.name}:`);
        this.subjects.forEach(subject => {
            console.log(subject.title);
        });
    }
}
class Subject {
    constructor(title, isElective) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = null;
        this.students = [];
    }
    overrideClasses(newNumber) {
        if (newNumber >= 3) {
            this.numberOfClasses = newNumber;
        } else {
            console.error("Number of classes cannot be smaller than 3.");
        }
    }
}
class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }
    startAcademy(academy) {
        if (!this.academy) {
            this.academy = academy;
            academy.students.push(this);
        } else {
            console.error(`${this.firstName} ${this.lastName} is already enrolled in an academy.`);
        }
    }
    startSubject(subject) {
        if (this.academy && this.academy.subjects.includes(subject)) {
            if (this.currentSubject) {
                this.completedSubjects.push(this.currentSubject);
            }
            this.currentSubject = subject;
            subject.students.push(this);
        } else {
            console.error(`Cannot start subject. Either the student is not in an academy or the subject does not belong to the academy.`);
        }
    }
}
let academy1 = new Academy("Tech Academy", new Date('2025-02-10'), new Date('2025-06-10'));
let subject1 = new Subject("Mathematics", false);
let subject2 = new Subject("Physics", true);
academy1.subjects.push(subject1, subject2);
subject1.academy = academy1;
subject2.academy = academy1;
let student1 = new Student("John", "Doe", 20);
let student2 = new Student("Jane", "Smith", 22);
student1.startAcademy(academy1);
student2.startAcademy(academy1);
student1.startSubject(subject1);
student2.startSubject(subject2); 
academy1.printStudents();
academy1.printSubjects();
subject1.overrideClasses(20);
console.log(subject1.numberOfClasses);