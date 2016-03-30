/**
 * Created by tello on 29/03/2016.
 */
import { createStore } from 'redux';
import enhancer from './enhancer/index';
import Immutable from 'immutable';
import mapApp from './reducers/index';

const initialState = Immutable.Map();
const store = createStore(mapApp, initialState, enhancer);

export default store;