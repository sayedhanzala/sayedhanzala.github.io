let len = document.getElementById("psdlength");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");
len = parseInt(len.value)

const passh = [  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z",  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  " ",  "!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "+",  "-",  "/",  "`",  "~",  "£",  "€",  "(",  ")",  "|",  "\\", "'",  '"',  "=",  ",",  ".",  "{",  "}",  "[",  "]",  "?",];

    let password = "";
    for (let i = 0; i < len; i++) {
        password += passh[Math.floor(Math.random() * passh.length)];
    }
const generate_pwd = () => {
        pass.innerHTML = "You're New Password is:" + password;
        console.log("You're New Password is:", password);
}


const submit_func = (event) => {
    event.preventDefault()
}

submit.addEventListener('click', submit_func)