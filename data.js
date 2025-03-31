// Here we created students object and then store data of students in it in key value pair forms
const students = [
    {
        id: 1,
        name: "Vijay Meena",
        averageGrade: 85,
        attendance: 95,
        assignmentsCompleted: 3,
        assignments: [
            { name: "Mathematics", date: "20-03-2025", grade: 88, status: "submitted" },
            { name: "Communication Skills", date: "15-03-2025", grade: 92, status: "submitted" },
            { name: "Software Testing", date: "15-03-2025", grade: 85, status: "submitted" }
        ]
    },
    {
        id: 2,
        name: "Devendra Saini",
        averageGrade: 87,
        attendance: 75,
        assignmentsCompleted: 1,
        assignments: [
            { name: "Mathematics", date: "23-03-2025", grade: 88, status: "late" },
            { name: "Communication Skills", date: "15-03-2025", grade: 92, status: "submitted" },
            { name: "Software Testing", date: "10-03-2025", grade: 85, status: "late" }
        ]
    },
    {
        id: 3,
        name: "Aruna",
        averageGrade: 90,
        attendance: 93,
        assignmentsCompleted: 3,
        assignments: [
            { name: "Mathematics", date: "20-03-2025", grade: 88, status: "submitted" },
            { name: "Communication Skills", date: "15-032025", grade: 92, status: "submitted" },
            { name: "Software Testing", date: "10-03-2025", grade: 90, status: "submitted" }
        ]
    },
    {
        id: 4,
        name: "Utkarsh Tailor",
        averageGrade: 92,
        attendance: 98,
        assignmentsCompleted: 2,
        assignments: [
            { name: "Mathematics", date: "20-03-2025", grade: 95, status: "submitted" },
            { name: "Communication Skills", date: "25-03-2025", grade: 70, status: "late" },
            { name: "Software Testing", date: "10-03-2025", grade: 94, status: "submitted" }
        ]
    },
    {
        id: 5,
        name: "Annu",
        averageGrade: 78,
        attendance: 85,
        assignmentsCompleted: 3,
        assignments: [
            { name: "Mathematics", date: "20-03-2025", grade: 75, status: "submitted" },
            { name: "Communication Skills", date: "10-03-2025", grade: 82, status: "submitted" },
            { name: "Software Testing", date: "10-03-2025", grade: 80, status: "Submitted" }
        ]
    }
];

// this function is used to get student data by its ID
function getStudentById(id) {
    return students.find(student => student.id === parseInt(id));
}

// This function is used to calculate the quick stats of the students
function getClassStats() {
    const totalStudents = students.length; //used to calculate total number of students
    const avgGrade = students.reduce((sum, student) => sum + student.averageGrade, 0) / totalStudents; 
    // used to find the average grade of the students
    const totalAssignments = students[0].assignments.length; //used to find total number of assignments
 


    //this is used to return the elements of quick stats
    return {
        totalStudents,
        avgGrade: avgGrade.toFixed(1),
        totalAssignments
    };
}
