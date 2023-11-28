const storevalue = () => {
    const userInput = document.getElementById('todo').value

    let data = localStorage.getItem('inputdata')

    data = data ? JSON.parse(data) : []

    data.push(userInput)

    localStorage.setItem('inputdata', JSON.stringify(data))

    alert('Data saved successfully')
}


const clearall = () => {
    let perm = prompt('Are you sure you want to clear all the data? y/n (Note: This will delete all the saved passwords also)')
    if (perm == 'yes' || perm == 'y') {
        localStorage.clear()
    }
}

const showresult = () => {
    const storedData = localStorage.getItem('inputdata')

    const data = storedData ? JSON.parse(storedData) : []

    let textOutput = '';
    data.forEach((input, index) => {
        textOutput += `${index + 0}: ${input}\n`
    });

    const outputElement = document.getElementById('result')
    outputElement.innerText = textOutput;
}


const removeitem = () => {
    let rem = parseInt(prompt('Which Data you want to remove, Enter the index value'))

    const storedData = localStorage.getItem('inputdata')

    let data = storedData ? JSON.parse(storedData) : []

    const indexToDelete = rem

    data.splice(indexToDelete, 1)

    localStorage.setItem('inputdata', JSON.stringify(data))

}

const removeinput = () => {
    let inputfield = document.getElementById('todo')
    inputfield.value = ''
}

let submitfield = document.getElementById('submitdata')

submitfield.addEventListener('click', removeinput)


