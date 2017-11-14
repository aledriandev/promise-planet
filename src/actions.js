import store from './store.js';

function dataFind () {
    return new Promise (resolve=>{
        setTimeout(()=>{resolve('holi')},1000);
    });
}

function myJson (url) {
    return fetch (url)
        .then(res=>res.json());
}

function infoPlanets (my_json) {
    
    let oldPlanets = [...store.getState().planets];
    my_json.forEach(function(planet) {
        return myJson(planet).then(resp=>{
            oldPlanets.push(resp)
                    console.log(oldPlanets);
                });
    });
    store.setState({
        planets:oldPlanets,
	})
    console.log("out",store.getState().planets);
}

export async function getPlanets() {
    // const dataF = await dataFind();
    
    let oldPlanets = [...store.getState().planets];
    const myjson = await myJson('data/earth-like-results.json');
    const info_planets = infoPlanets(myjson.results);
    // store.setState({
    //     result: myjson,
    //     planets: info_planets,
	// })
    console.log(info_planets[0]);
    // console.log(oldPlanets);
}

