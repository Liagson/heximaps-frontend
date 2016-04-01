/**
 * Created by tello on 29/03/2016.
 */
import {CURSOR_CHANGE} from '../../constants';
import Immutable from 'immutable';

const map = function(state = [], action){
    switch (action.type) {
        case "@@INIT":
            return Immutable.fromJS({
                cursor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 5,
                    y: 5
                },
                tiles: [
                    [0, 1, 2, 3, 4],
                    [2, 4, 1, 0, 3],
                    [3, 1, 2, 4, 4],
                    [0, 4, 3, 0, 1],
                    [1, 3, 0, 2, 0]
                ]
            });
            break;
        case CURSOR_CHANGE:
            return state.merge({
                cursor: {
                    x: action.x,
                    y: action.y
                }
            });
            break;
        default:
            return state;
    }
};

export default map;