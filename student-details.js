document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id");
    const student = getStudentById(studentId);

    if (student) {
        // Accessing the information of the students
        document.getElementById("studentName").textContent = student.name;
        document.getElementById("studentId").textContent = student.id;
        document.getElementById("studentAvgGrade").textContent = student.averageGrade + "%";
        document.getElementById("studentAttendance").textContent = student.attendance + "%";

        // Here we render the student's assignments
        renderAssignments(student.assignments);

        // here we restore the chart functionality
        renderPerformanceChart(student);
    } else {
        document.querySelector(".student-details").innerHTML = "<p>Student not found.</p>";
    }
});

// This function is used to render the history of the assignments
function renderAssignments(assignments) {
    const assignmentHistory = document.getElementById("assignmentHistory");
    assignmentHistory.innerHTML = "";

    assignments.forEach(assignment => {
        const row = document.createElement("tr");

        // This is used to check whether the assignment is late or not
        const isLate = assignment.status.toLowerCase() === "late";



        // this is used to show the assignment details and the view button will be disabled if the assignment is late 
        row.innerHTML = `
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
        assignmentHistory.appendChild(row);
    });
}

// This function is used to render the performance graph
function renderPerformanceChart(student) {
    const ctx = document.getElementById("performanceChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Average Grade", "Attendance"],
            datasets: [{
                label: student.name + "'s Performance",
                data: [student.averageGrade, student.attendance],
                backgroundColor: ["#ff8c00", "#4CAF50"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// This function is used to handle the assignment viewing
function viewAssignment(name, date, grade, status) {
    alert(`Viewing assignment: ${name}\nDate: ${date}\nGrade: ${grade}%`);
}
