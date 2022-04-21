async function giveCountry() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}
giveCountry();

//# sourceMappingURL=index.8f215b5e.js.map
