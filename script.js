const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date(2025, 1); // เริ่มต้นที่ February 2025

function renderCalendar(date) {
    const calendarElement = document.getElementById("calendar");

    // คำนวณวันที่
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    // สร้างตารางปฏิทิน
    let table = "<table><tr>";
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of weekDays) {
        table += `<th>${day}</th>`;
    }
    table += "</tr><tr>";

    // เติมช่องว่างก่อนวันที่ 1
    for (let i = 0; i < startDay; i++) {
        table += "<td></td>";
    }

    // เติมวันที่ในแต่ละช่อง
    for (let day = 1; day <= daysInMonth; day++) {
        if ((startDay + day - 1) % 7 === 0 && day !== 1) {
            table += "</tr><tr>";
        }
        table += `<td>${day}</td>`;
    }
    table += "</tr></table>";

    calendarElement.innerHTML = table;
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

// เริ่มต้นแสดงปฏิทิน
renderCalendar(currentDate);