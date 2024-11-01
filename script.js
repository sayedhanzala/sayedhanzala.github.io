let submitfield = document.getElementById("submitdata");
let showdata = document.getElementById("showdata");
let clear = document.getElementById("clear");
let removeone = document.getElementById("removeitem");
const outputElement = document.getElementById("result");
let navbar = document.getElementById("navbar");


// rendering navbar

fetch("./layout/header.html")
  .then(response => response.text())
  .then(data => {
    navbar.innerHTML = data;

    // Add event listener for the menu toggle after loading the navbar
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        const navLinks = document.getElementById("navbarNavAltMarkup");
        navLinks.classList.toggle('show');
      });
    }
  });

const storevalue = () => {
  const userInput = document.getElementById("todo").value;

  let data = localStorage.getItem("inputdata");

  data = data ? JSON.parse(data) : [];

  data.push(userInput);

  localStorage.setItem("inputdata", JSON.stringify(data));

  alert("Data saved successfully");
};

const clearall = () => {
  let perm = prompt("Are you sure you want to clear all the data? y/n");
  if (perm == "yes" || perm == "y") {
    localStorage.removeItem("inputdata");
  }
};

const showresult = () => {
  const storedData = localStorage.getItem("inputdata");

  const data = storedData ? JSON.parse(storedData) : [];

  if (data.length == 0) {
    outputElement.innerHTML =
      "No data Found, Write some data & store it to saved.";
  } else {
    let textOutput = "";
    data.forEach((input, index) => {
      textOutput += `${index + 0}: ${input}\n`;
    });

    outputElement.innerText = textOutput;
  }
};

const removeitem = () => {
  let rem = parseInt(
    prompt("Which Data you want to remove, Enter the index value")
  );

  const storedData = localStorage.getItem("inputdata");

  let data = storedData ? JSON.parse(storedData) : [];

  const indexToDelete = rem;

  data.splice(indexToDelete, 1);

  localStorage.setItem("inputdata", JSON.stringify(data));
};

const removeinput = () => {
  let inputfield = document.getElementById("todo");
  inputfield.value = "";
};

submitfield.addEventListener("click", storevalue);
showdata.addEventListener("click", showresult);
clear.addEventListener("click", clearall);
removeone.addEventListener("click", removeitem);