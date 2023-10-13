/*Пример №1 - Написать функцию, которая получает строку и проверяет является ли строка узбекским номером телефона.*/

function checkNumber() {
    let phoneNumber = document.getElementById('userPhone').value;
    let result = document.getElementById("box");
    
    if (phoneNumber.startsWith("+998") && phoneNumber.length ===13){
        result.innerHTML = `Номер телефнона ${phoneNumber} узбекский`;
    } else{
        result.innerHTML = `Номер телефнона ${phoneNumber} не узбекский`;
    }
}

/*Пример №2 - Форматировать номер телефона в "+998 (11) 123-45-67".*/

function formatNumber() {
    const phoneArray = document.getElementById('userPhoneNumber').value.split('');

    if (phoneArray.length > 4 && phoneArray[4] !== ' ') {
        phoneArray.splice(4, 0, ' ');
    }
    
    if (phoneArray.length > 5 && phoneArray[5] !== '(') {
        phoneArray.splice(5, 0, '(');
    }

    if (phoneArray.length > 8 && phoneArray[8] !== ')') {
        phoneArray.splice(8, 0, ')');
    }

    if (phoneArray.length > 9 && phoneArray[9] !== ' ') {
        phoneArray.splice(9, 0, ' ');
    }

    if (phoneArray.length > 13 && phoneArray[13] !== '-') {
        phoneArray.splice(13, 0, '-');
    }

    if (phoneArray.length > 16 && phoneArray[16] !== '-') {
        phoneArray.splice(16, 0, '-');
    }


    document.getElementById('userPhoneNumber').value = "+998" + phoneArray.join('').slice(4);
}
