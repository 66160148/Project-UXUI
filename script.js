const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date(2025, 1); 

function renderCalendar(date) {
    const calendarElement = document.getElementById("calendar");
    const monthYearElement = document.getElementById("monthYear"); // อ้างอิง <h2>

    // แสดงชื่อเดือนและปี
    monthYearElement.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

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
document.addEventListener("DOMContentLoaded", () => {
    renderCalendar(currentDate);
});

function goToLogin() {
    window.location.href = "login.html";
  }

  // เปิดป็อปอัป
function openPopup() {
    document.getElementById("loginPopup").style.display = "flex";
}

// ปิดป็อปอัป
function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

// แสดง/ซ่อนรหัสผ่าน
function togglePassword() {
  let passwordInput = document.getElementById("password");
  let toggleButton = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerHTML = "🙈"; // เปลี่ยนเป็นไอคอนปิดตา
  } else {
      passwordInput.type = "password";
      toggleButton.innerHTML = "👁"; // เปลี่ยนเป็นไอคอนเปิดตา
  }
}


function goBack() {
  window.history.back();
}

function openSettings() {
  alert("เปิดการตั้งค่า");
}

function changeProfilePic() {
  alert("เปลี่ยนรูปโปรไฟล์");
}

function editName() {
  let newName = prompt("กรอกชื่อใหม่:", document.getElementById("name").innerText);
  if (newName) document.getElementById("name").innerText = newName;
}

function editPhone() {
  let newPhone = prompt("กรอกเบอร์โทรใหม่:", document.getElementById("phone").innerText);
  if (newPhone) document.getElementById("phone").innerText = newPhone;
}

function toggleAccordion(btn) {
  let panel = btn.nextElementSibling;
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function deleteTrip(btn) {
  if (confirm("คุณต้องการลบแผนที่นี้ใช่หรือไม่?")) {
    btn.parentElement.remove();
  }
}

function changePassword() {
  alert("เปลี่ยนรหัสผ่าน");
}

function confirmDeleteAccount() {
  if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบบัญชี?")) {
    alert("บัญชีถูกลบแล้ว");
  }
}

function logout() {
  alert("ออกจากระบบ");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // ป้องกันการโหลดหน้าใหม่
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  // ตัวอย่าง: ตรวจสอบ username และ password
  if (username === "SmileZ" && password === "1234") {
      window.location.href = "home2.html"; // เปลี่ยนไปยังหน้าถัดไป
  } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const selectAvailability = document.getElementById("availability");

  // กำหนดเดือนและจำนวนวันในแต่ละเดือน
  const months = [
      { name: "มกราคม", days: 31 },
      { name: "กุมภาพันธ์", days: 28 },
      { name: "มีนาคม", days: 31 },
      { name: "เมษายน", days: 30 },
      { name: "พฤษภาคม", days: 31 },
      { name: "มิถุนายน", days: 30 },
      { name: "กรกฎาคม", days: 31 },
      { name: "สิงหาคม", days: 31 },
      { name: "กันยายน", days: 30 },
      { name: "ตุลาคม", days: 31 },
      { name: "พฤศจิกายน", days: 30 },
      { name: "ธันวาคม", days: 31 }
  ];

  function populateDateOptions() {
      selectAvailability.innerHTML = ""; // ล้างตัวเลือกเก่าก่อน

      months.forEach((month, monthIndex) => {
          for (let i = 1; i <= month.days; i++) {
              let option = document.createElement("option");
              option.value = `${i}-${monthIndex + 1}`; // ใช้รูปแบบ "วันที่-เดือน"
              option.textContent = `${i} ${month.name}`;
              selectAvailability.appendChild(option);
          }
      });
  }

  populateDateOptions(); // เรียกใช้งานตอนโหลดหน้า

  // เมื่อเลือกวันที่จาก select
  selectAvailability.addEventListener("change", function () {
      let selectedValue = selectAvailability.value.split("-");
      let selectedDate = parseInt(selectedValue[0]); // วันที่
      let selectedMonth = parseInt(selectedValue[1]); // เดือน (1-12)

      let days = calendar.getElementsByTagName("td");

      // ลบรูปเก่าถ้ามี
      for (let day of days) {
          if (parseInt(day.innerText) === selectedDate) {
              let existingImg = day.querySelector("img");
              if (existingImg) {
                  existingImg.remove();
              }

              // เพิ่มรูปภาพ
              let userImg = document.createElement("img");
              userImg.src = "image/1-4.jpg";
              userImg.alt = "User";
              userImg.classList.add("calendar-avatar");
              day.appendChild(userImg);
              break;
          }
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectAvailability = document.getElementById("availability");

  function populateDateOptions() {
      selectAvailability.innerHTML = ""; // เคลียร์ตัวเลือกก่อนเพิ่มใหม่

      for (let month = 1; month <= 12; month++) {
          for (let day = 1; day <= 31; day++) {
              let option = document.createElement("option");
              option.value = `${day}-${month}`;
              option.textContent = `${day} / ${month}`;
              selectAvailability.appendChild(option);
          }
      }
  }

  populateDateOptions();
});
