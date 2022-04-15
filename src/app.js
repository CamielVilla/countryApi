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
async function giveCountry() {
    try{
        const result = await
            axios.get('https://restcountries.com/v2/all');
            const sorted = result.data.sort((a, b) => a.population - b.population);
        for (let i = 0; i < sorted.length ; i++) {
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
    } catch (e){
        console.error(e);
    }
}

giveCountry();
