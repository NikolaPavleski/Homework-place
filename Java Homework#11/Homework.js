class Student {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.academyName = this.getAcademyName();
    }
    getAcademyName() {
      return `${this.constructor.name} Academy`;
    }
}
class DesignStudent extends Student {
    constructor(firstName, lastName, isStudentOfTheMonth) {
      super(firstName, lastName);
      this.isStudentOfTheMonth = isStudentOfTheMonth || false;
    }
    attendAdobeExam() {
      console.log(`${this.firstName} is doing an adobe exam!`);
    }
}
class CodeStudent extends Student {
    constructor(firstName, lastName) {
      super(firstName, lastName);
      this.hasIndividualProject = false;
      this.hasGroupProject = false;
    }
     doProject(type) {
      if (type === 'individual') {
        this.hasIndividualProject = true;
        console.log(`${this.firstName} is working on an individual project.`);
      } else if (type === 'group') {
        this.hasGroupProject = true;
        console.log(`${this.firstName} is working on a group project.`);
      } else {
        console.log('Invalid project type.');
      }
    }
}
class NetworkStudent extends Student {
    constructor(firstName, lastName, academyPart) {
      super(firstName, lastName);
      this.academyPart = academyPart || 1;
    }
    attendCiscoExam() {
      console.log(`${this.firstName} is doing a cisco exam!`);
    }
}
const designStudent = new DesignStudent('Alice', 'Smith', true);
const codeStudent = new CodeStudent('Bob', 'Johnson');
const networkStudent = new NetworkStudent('Charlie', 'Brown', 3);
console.log(designStudent);
designStudent.attendAdobeExam();
console.log(codeStudent);
codeStudent.doProject('individual');
codeStudent.doProject('group');
console.log(networkStudent);
networkStudent.attendCiscoExam();  