document.addEventListener("DOMContentLoaded", function () {
    const assignmentTableBody = document.getElementById("assignmentTableBody");

    function renderAssignments() {
        students.forEach(student => {
            student.assignments.forEach(assignment => {
                const row = document.createElement("tr");
                
                // It checked whether the assignment is late or not
                const isLate = assignment.status === "late";
                
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${assignment.name}</td>
                    <td>${assignment.date}</td>
                    <td>${assignment.grade}%</td>
                    <td class="${isLate ? 'late' : 'submitted'}">${assignment.status}</td>
                    <td>
                        <button class="btn view-btn" ${isLate ? "disabled" : ""} 
                            onclick="viewAssignment('${assignment.name}', '${assignment.date}', '${assignment.grade}', '${assignment.status}')">
                            View
                        </button>
                    </td>
                `;
                assignmentTableBody.appendChild(row);
            });
        });
    }

    renderAssignments();
});

// This function is used to open the details of the students
function viewAssignment(name, date, grade, status) {
    if (status === "late") {
        alert("This assignment was submitted late and cannot be viewed.");
    } else {
        alert(`Viewing assignment: ${name}\nDate: ${date}\nGrade: ${grade}%`);
    }
}
