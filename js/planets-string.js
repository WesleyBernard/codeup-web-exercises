(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let brPLanets = planetsArray.join("<br>");
    console.log(brPLanets)
    // document.querySelector("body").insertAdjacentHTML("afterbegin", brPLanets);
    

    // <ul> 
    //     <li>Mercury</li> 
    //     <li>Venus</li>
    //     <li>Earth</li>
    //     <li>Mars</li>
    //     <li>Jupiter</li>
    //     <li>Saturn</li>
    //     <li>Uranus</li>
    //     <li>Neptune</li>
    // </ul>

    let planetsNewArray = brPLanets.split("<br>")
    console.log(planetsNewArray);
    let coolUl = ""
    planetsNewArray.forEach(planet => coolUl += `<li>${planet}</li>`)
    coolUl = "<ul>" + coolUl + "</ul>"

    console.log(coolUl);

})();