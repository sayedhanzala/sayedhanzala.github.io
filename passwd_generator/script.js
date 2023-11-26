const history = document.getElementById("history");
const shwHistory = document.getElementById("shw-history");

const passh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", "!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "/", "`", "~", "£", "€", "(", ")", "|", "\\", "'", '"', "=", ",", ".", "{", "}", "[", "]", "?",
];

document
  .getElementById("generatePassword")
  .addEventListener("click", generatePassword);

function generatePassword() {
  const passwordLength = parseInt(
    document.getElementById("passwordLength").value
  );

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * passh.length);
    password += passh[randomIndex];
  }

  document.getElementById("password").textContent = password;

  let data = localStorage.getItem("inputdata");

  data = data ? JSON.parse(data) : [];

  data.push(password);

  localStorage.setItem("inputdata", JSON.stringify(data));
}

const showresult = () => {
  const storedData = localStorage.getItem("inputdata");

  const data = storedData ? JSON.parse(storedData) : [];

  let textOutput = "";
  data.forEach((input, index) => {
    textOutput += `${index + 0}: ${input}\n`;
  });

  history.innerText = textOutput;
};

shwHistory.addEventListener("click", showresult);