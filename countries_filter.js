const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    // console.log(countries);
    countries.filter((value) => {
        if (value.region === 'Asia') {
            console.log(value.name.common);
        };
    })
    
};
    xhr.send();

