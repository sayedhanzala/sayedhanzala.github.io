const btnE1 = document.querySelectorAll("button");
const resultE1 = document.getElementById("inputbox");

for (let i = 0; i < btnE1.length; i++) {
  btnE1[i].addEventListener("click", () => {
    const btnValue = btnE1[i].textContent;
    console.log(btnValue);
    if (btnValue === "c") {
      resultE1.value = "";
    } else if (btnValue === "=") {
      resultE1.value = eval(resultE1.value);
    } else if (btnValue === "*") {
      resultE1.value = resultE1.value = btnValue;
    } else {
      resultE1.value = resultE1.value + btnValue;
    }
  });
}
