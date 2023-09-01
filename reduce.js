const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    // console.log(countries);
    
    let pops = countries.map((value) => {
         return value.population;
    })
      
    let total = pops.reduce((pv, cv) => {
        return pv + cv;
    })
   
    console.log(total);
};
    xhr.send();