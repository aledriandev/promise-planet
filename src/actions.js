import store from './store.js';

function myJson (url) {
    return fetch (url)
        .then(res=>res.json());
}

 function infoPlanets (my_json) {
    return Promise.all( my_json.map( (planet) => myJson(planet)));
 }

export async function getPlanets() {
    const myjson = await myJson('data/earth-like-results.json');
    const info_planets = await infoPlanets(myjson.results);
    store.setState({
        planets: info_planets,
	});
}

//Otra solucion con el store defrente.
//priblemas: 5 caballos entrenado por un carril 