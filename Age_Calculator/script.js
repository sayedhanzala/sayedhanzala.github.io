const yearDropdown = document.getElementById("year");
const currentYear = new Date().getFullYear();

for (let i = 1947; i <= currentYear; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  yearDropdown.appendChild(option);
}

function updateDays() {
  const monthDropdown = document.getElementById("month");
  const dayDropdown = document.getElementById("date");
  const selectedMonth = monthDropdown.value;
  const selectedYear = yearDropdown.value;

  dayDropdown.innerHTML = "";

  const lastDay = new Date(selectedYear, selectedMonth, 0).getDate();

  for (let i = 1; i <= lastDay; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    dayDropdown.appendChild(option);
  }
}

document.getElementById("month").addEventListener("change", updateDays);
document.getElementById("year").addEventListener("change", updateDays);

updateDays();

const age = () => {
  let d1 = document.getElementById("date").value;
  let m1 = document.getElementById("month").value;
  let y1 = document.getElementById("year").value;

  if (d1 == "" || m1 == "" || y1 == "") {
    document.getElementById("age").innerHTML =
      "Please enter your Birth Date...";
  } else {
    let date1 = new Date();
    let d2 = date1.getDate();
    let m2 = date1.getMonth() + 1;
    let y2 = date1.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }

    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById(
      "age"
    ).innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days`;
  }
};

document.getElementById("btn-res").addEventListener("click", age);
