// Here we are accessing the DOM Elements 
const studentTableBody = document.getElementById('studentTableBody');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const totalStudentsEl = document.getElementById('totalStudents');
const avgGradeEl = document.getElementById('avgGrade');
const totalAssignmentsEl = document.getElementById('totalAssignments');

// Initializing the Dashboard 
function initializeDashboard() {
    updateStats();
    renderStudentTable(students);
    setupEventListeners();
}

// This is used to update the statistics whih are shown in quick stats
function updateStats() {
    const stats = getClassStats();
    totalStudentsEl.textContent = stats.totalStudents;    //this will show the total number of students in quick stats
    avgGradeEl.textContent = stats.avgGrade;   //this will show the Average Grade of students in quick stats
    totalAssignmentsEl.textContent = stats.totalAssignments; //this will show the total number of Assignments in quick stats
}

// This is used to render the student details from the data.js file
function renderStudentTable(studentsToRender) {
    studentTableBody.innerHTML = '';
    studentsToRender.forEach(student => {
        const row = document.createElement('tr');
        // here we are accessing the data of the students in the table 
        row.innerHTML = `
            <td>${student.name}</td>   
            <td>${student.averageGrade}%</td>
            <td>${student.attendance}%</td>
            <td>${student.assignmentsCompleted}</td>
            <td>
                <a href="student-details.html?id=${student.id}" class="btn">
                    <i class="fas fa-eye"></i> View
                </a>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Setup the event listeners
function setupEventListeners() {

    // this is used for he search functionality in the Home Page

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredStudents = students.filter(student => 
            student.name.toLowerCase().includes(searchTerm)
        );
        renderStudentTable(filteredStudents);
    });


    // this is used to implement Sorting functionality in the Home Page
    sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        const sortedStudents = [...students].sort((a, b) => {
            switch(sortBy) {
                case 'grade':
                    return b.averageGrade - a.averageGrade;
                case 'attendance':
                    return b.attendance - a.attendance;
                default:
                    return a.name.localeCompare(b.name);
            }
        });
        renderStudentTable(sortedStudents);
    });
}

// this is used to implement Filtering functionality in the Home Page

document.getElementById("gradeFilterInput").addEventListener("input", function () {
    let gradeThreshold = parseFloat(this.value);
    let filteredStudents = students.filter(student => 
        isNaN(gradeThreshold) || student.assignmentsCompleted >= gradeThreshold
    );
    
    renderStudentTable(filteredStudents);
});




// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', initializeDashboard);
