const age = () => {
    let d1 = document.getElementById('date').value
    let m1 = document.getElementById('month').value
    let y1 = document.getElementById('year').value

    if(d1 == '' || m1 == '' || y1 == ''){
        document.getElementById('age').innerHTML = 'Please enter your Birth Date...'
    }else{
        let date1 = new Date()
        let d2 = date1.getDate()
        let m2 = date1.getMonth() + 1
        let y2 = date1.getFullYear()
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1]
            m2 = m2 - 1
        }
    
        if (m1 > m2) {
            m2 = m2 + 12
            y2 = y2 - 1
        }
    
        let d = d2 - d1
        let m = m2 - m1
        let y = y2 - y1
    
        document.getElementById('age').innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days`
    }

}

document.getElementById("btn-res").addEventListener("click", age);
