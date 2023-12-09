const historyElem = document.getElementById("history");
const shwHistory = document.getElementById("shw-history");

const passh = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  " ",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "+",
  "-",
  "/",
  "`",
  "~",
  "£",
  "€",
  "(",
  ")",
  "|",
  "\\",
  "'",
  '"',
  "=",
  ",",
  ".",
  "{",
  "}",
  "[",
  "]",
  "?",
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

  let data = localStorage.getItem("savedpasswd");

  data = data ? JSON.parse(data) : [];

  data.push(password);

  localStorage.setItem("savedpasswd", JSON.stringify(data));
}

const showresult = () => {
  const storedData = localStorage.getItem("savedpasswd");

  const data = storedData ? JSON.parse(storedData) : [];

  if(data.length == 0){
    historyElem.innerHTML = 'No saved passwords, Click <kbd>Generate Password</kbd> to save password here.'
  }else{
    let textOutput = "";
    data.forEach((input, index) => {
      textOutput += `${index + 1}: ${input}\n`;
    });
  
    historyElem.innerText = textOutput;
  }
};

const clearHistory = () => {
  let perm = prompt(
    "Are you sure you want to clear all the saved passwords? y/n"
  );
  if (perm == "yes" || perm == "y") {
    localStorage.removeItem("savedpasswd");
  }
};

shwHistory.addEventListener("click", showresult);

const copyFunc = () => {
  let copyText = document.getElementById("password").innerText;
  navigator.clipboard.writeText(copyText);
};

document.getElementById("cpy-passwd").addEventListener("click", copyFunc);
document.getElementById("clr-history").addEventListener("click", clearHistory);
