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

export async function getPlanets() {
    const dataF = await dataFind();
    const myjson = await myJson();
    console.log(myjson);
}
