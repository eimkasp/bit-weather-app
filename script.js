/* 

Current Weather API Endpoint
https://weatherstack.com/documentation

http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York    
*/


$(document).ready(function() {
    /* TODO: USE your own KEY! */
    let accessKey = '3a6291f2c45024b7354aecde6b9a7733';

    let APIURL = `http://api.weatherstack.com/current?access_key=${accessKey}&query=Vilnius`;

    console.log(APIURL);

    /* Aprašyti GET užklausą, gauti duomenims pagal miesto pavadinima */

    /* Atvaizduoti pasirinktus duomenis, HTML dalyje. */

    function getWeather() {
        /* Čia aprašyti savo logiką. */
    }
});