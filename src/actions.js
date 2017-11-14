import store from './store.js';

function dataFind () {
    return new Promise (resolve=>{
        setTimeout(()=>{resolve('holi')},1000);
    });
}

function myJson () {
    return fetch ('data/earth-like-results.json')
        .then(res=>res.json());
}

function infoPlanets (my_json) {
    // console.log(myjson)
    my_json.forEach(function(planet) {
        const ale= fetch (planet)
                .then(resp=>resp.json());
        console.log(ale)
        // console.log(planet)
    });
}

export async function getPlanets() {
    // const dataF = await dataFind();
    const myjson = await myJson();
    const info_planets = await infoPlanets(myjson.results);
    console.log(myjson);
    // console.log(info_planets);
}

