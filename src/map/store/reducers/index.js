/**
 * Created by tello on 29/03/2016.
 */
import { combineReducers } from 'redux-immutable';
import map from './map';

const mapApp = combineReducers({
    map
});

export default mapApp