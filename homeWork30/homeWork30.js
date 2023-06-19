class Student {
    constructor(firstName, secondName, birthYear, ...grades) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(undefined);
    }
    
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getGpa(){
        const gpa = this.grades.reduce((sum, el) => sum + el, 0) / this.grades.length;
        return gpa
    }

    updateAttendance(present) {
        const emptyIndex = this.attendance.findIndex(el => el === undefined);
        if (emptyIndex !== -1) {
            this.attendance[emptyIndex] = present;
        } else {
            console.log('Attendance log is full.');
        }
    }

    present (attendedClasses) {
        for (let i = 0; i < attendedClasses; i++) {
            this.updateAttendance(true);
        }
        return this
    }

    absent(missedClasses) {
        for (let i = 0; i < missedClasses; i++) {
            this.updateAttendance(false);
        }
        return this
    }

    getAverageAttendance() {
        return this.attendance.reduce((sum, el) => el === true ? sum + 1 : sum, 0) / this.attendance.length;
    }

    summary() {
        let gpa = this.getGpa();
        let averageAttendance = this.getAverageAttendance();
        
        if (gpa > 90 && averageAttendance > 0.9) {
            console.log('Good job!');
        } else if (gpa < 90 && averageAttendance < 0.9) {
            console.log('Radish!!!');
        } else {
            console.log('Ok but could be better.');
        }
    }
}


const student1 = new Student('John', 'Doe', 2000, 100, 90, 92);
const student2 = new Student('Jane', 'Smith', 1999, 95, 88, 91);
const student3 = new Student('Tom', 'Johnson', 2001, 80, 86, 89);

student1.present(23).absent(2);
student2.present(22).absent(1);
student3.present(18).absent(5);

console.log(`Student 1: ${student1.firstName + ' ' + student1.secondName}`);
console.log(`Student 1 Age: ${student1.getAge()}`);
console.log(`Student 1 GPA: ${student1.getGpa()}`);
console.log(`Student 1 Average Attendance: ${student1.getAverageAttendance()}`);
student1.summary();

console.log('-------------------------------------------------------------------')

console.log(`Student 2: ${student2.firstName + ' ' + student2.secondName}`);
console.log(`Student 2 Age: ${student2.getAge()}`);
console.log(`Student 2 GPA: ${student2.getGpa()}`);
console.log(`Student 2 Average Attendance: ${student2.getAverageAttendance()}`);
student2.summary();

console.log('-------------------------------------------------------------------')

console.log(`Student 3: ${student3.firstName + ' ' + student3.secondName}`);
console.log(`Student 3 Age: ${student3.getAge()}`);
console.log(`Student 3 GPA: ${student3.getGpa()}`);
console.log(`Student 3 Average Attendance: ${student3.getAverageAttendance()}`);
student3.summary();


