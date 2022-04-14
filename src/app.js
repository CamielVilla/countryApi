import axios from "axios";

export function giveRegionColor(region) {
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
            // console.log(result);
            const sorted = result.data.sort((a, b) => a.population - b.population);
            // console.log(sorted);
        for (let i = 0; i < sorted.length ; i++) {
            const countryName = document.createElement('li');
            countryName.className = giveRegionColor(sorted[i].region);
            console.log(countryName.className);
            const countryFlag = document.createElement('img');
            const countryPopulation = document.createElement('p');
            countryName.textContent = sorted[i].name;
            // countryName.style.color = color;
            countryFlag.src = sorted[i].flag;
            countryFlag.width="50";
            countryPopulation.textContent = "has a population of " + sorted[i].population + " people";
            const countryList = document.getElementById("country-name");
            countryList.appendChild(countryName);
            countryList.appendChild(countryFlag);
            countryList.appendChild(countryPopulation);
        }
    } catch (e){
        console.error(e);
    }
}



giveCountry();
