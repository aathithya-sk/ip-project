function fetchStudentDetails() {
    const regNo = document.getElementById("studentRegNo").value;
    if (!regNo) {
        document.getElementById("studentDetails").innerHTML = "Please select a registration number.";
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `StudentServlet?regNo=${regNo}`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("studentDetails").innerHTML = xhr.responseText;
        } else {
            document.getElementById("studentDetails").innerHTML = "Error retrieving data.";
        }
    };
    xhr.send();
}
