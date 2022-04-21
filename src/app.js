import axios from "axios";

function giveRegionColor(region) {
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
// async function giveCountry() {
//     try{
//         const result = await
//             axios.get('https://restcountries.com/v2/all');
//             const sorted = result.data.sort((a, b) => a.population - b.population);
//         for (let i = 0; i < sorted.length ; i++) {
//             const countryDiv = document.createElement('div')
//             countryDiv.id = "country-div";
//             const countryName = document.createElement('p');
//             countryName.className = giveRegionColor(sorted[i].region);
//             const countryFlag = document.createElement('img');
//             const countryPopulation = document.createElement('p');
//             const countryPopulationNumber = sorted[i].population;
//             countryName.textContent = sorted[i].name;
//             countryFlag.src = sorted[i].flag;
//             countryPopulation.textContent = "Has a population of " + countryPopulationNumber + " people";
//             const countryList = document.getElementById("country-name");
//             countryDiv.appendChild(countryName);
//             countryDiv.appendChild(countryFlag);
//             countryDiv.appendChild(countryPopulation);
//             countryList.appendChild(countryDiv);
//         }
//     } catch (e){
//         console.error(e);
//     }
// }

giveCountry();


async function giveCountry(country) {
    try{
        const result = await
            axios.get('https://restcountries.com/v2/all');
        const sorted = result.data.sort((a, b) => a.population - b.population);

        for (let i = 0; i < sorted.length ; i++) {
            if (country === sorted[i].name) {
                const countryDiv = document.createElement('div')
                countryDiv.id = "country-div";
                const countryName = document.createElement('p');
                countryName.className = giveRegionColor(sorted[i].region);
                const countryFlag = document.createElement('img');
                const countryPopulation = document.createElement('p');
                const countryPopulationNumber = sorted[i].population;
                countryName.textContent = sorted[i].name;
                countryFlag.src = sorted[i].flag;
                countryPopulation.textContent = "Has a population of " + countryPopulationNumber + " people";
                const countryList = document.getElementById("country-name");
                countryDiv.appendChild(countryName);
                countryDiv.appendChild(countryFlag);
                countryDiv.appendChild(countryPopulation);
                countryList.appendChild(countryDiv);
            }
        }
    } catch (e){
        console.error(e);
    }
}
// async function searchCountry() {
//     try {
//         const result = await
//         axios.get('https://restcountries.com/v2/all');
//         const  { data: { name }} = result;
//         console.log(name);
//
//
//     }catch (e) {
// console.error(e)
//     }
//
// }


const button = document.getElementById("button");
button.addEventListener("click", showCountry)

const countryInput = document.getElementById("countryname");
// countryInput.addEventListener("keypress", showInput);
//
// function showInput(e) {
//     console.log(e)
// }
function showCountry() {
    console.log();
}