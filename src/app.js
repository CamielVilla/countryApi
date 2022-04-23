import axios from "axios";
//-------------------------Part 1-----------------------//
async function fetchCountries() {
    try{
        const result = await
            axios.get('https://restcountries.com/v2/all/');
        const countriesArray = result.data;
        showCountriesOnPage(countriesArray);
    } catch (e){
        console.error(e);
    }
}

fetchCountries();


function showCountriesOnPage(countriesArray) {
const countryList = document.getElementById("country-list");
countryList.innerHTML = countriesArray.map((country) => {
    return `
        <div class="country-div">
        <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
        <span class="${getRegionClass(country.region)}">${country.name}</span>
        </div>
    `
}).join(" ")
}

function getRegionClass(region) {
    if (region == "Europe"){
        return "Europe";
    }else if(region == "Africa") {
        return "Africa";
    } else if (region == "Americas"){
        return "Americas"
    }else if (region == "Asia"){
        return "Asia";
    } else if(region == "Oceania"){
        return "Oceania";
    }else {
        return "Other";
    }
}

//-------------------------Part 2-----------------------//

const form = document.getElementById("country-form");
form.addEventListener("submit", getInputFromForm);

function getInputFromForm(e) {
    e.preventDefault();
    let input = document.getElementById("country-name-input").value;
    searchCountry(input);
}

async function searchCountry (input) {
    try{
        const result = await
            axios.get('https://restcountries.com/v2/name/' + input + "?fields=flag,name,subregion,capital,currencies,population,languages");
        const countryInfo = result.data;
        countryCurrency(countryInfo);
    } catch (e){
        const searchResult = document.getElementById("search-result");
        searchResult.innerHTML = `<p>Land bestaat niet</p>`;
        console.error(e);
    }
}

function countryCurrency (countryInfo) {
    const currencyArray = countryInfo[0].currencies;
    const currencyNames = [];
    for (let i = 0; i < currencyArray.length; i++) {
        currencyNames.push(currencyArray[i].name)
    }
    countryLanguage(countryInfo, currencyNames)

};

function countryLanguage (countryInfo, currencyNames) {
    console.log
    const languageArray = countryInfo[0].languages;
    const languageName = [];
    for (let i = 0; i < languageArray.length ; i++) {
        languageName.push(languageArray[i].name)
    }
    printResult(countryInfo, currencyNames, languageName)
}

function printResult(countryInfo, currencyNames, languageName) {
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = countryInfo.map((country) => {
        return `
        <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
        <p class="name">${country.name} is situated in ${country.subregion}</p>
         <p class="population">It has a population of ${country.population} people</p>
         <p class="capital-and-currency">The capital is ${country.capital} and you can pay with ${currencyNames.join(" and ")}</p>
         <p class="language">They speak ${languageName.join(" and ")}.</p>
        `
    })
    resetForm()
}

function resetForm() {
   form.reset();
}


