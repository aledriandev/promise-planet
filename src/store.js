import createStore from 'redux-zero';

const initialState = {
    result: {},
    planets: []
}

const store = createStore(initialState);
export default store; 