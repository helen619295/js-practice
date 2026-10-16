const averageGrade = 80;
let studentLevel;
if (averageGrade < 60) {
    studentLevel = 'Unsatisfactorily';
} else if (averageGrade >= 60 && averageGrade <= 70) {
    studentLevel ='Satisfactorily';
} else if (averageGrade >= 71 && averageGrade <= 80) {
    studentLevel = 'Good';
} else if (averageGrade >= 81 && averageGrade <= 90) {
    studentLevel = 'Very good';
} else if (averageGrade >= 91 && averageGrade <= 100) {
    studentLevel = 'Perfectly';
}

console.log (studentLevel);