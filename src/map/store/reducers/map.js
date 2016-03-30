/**
 * Created by tello on 29/03/2016.
 */
import Immutable from 'immutable';

const map = function(state = [], action){
    switch (action.type) {
        case "@@INIT":
            return Immutable.fromJS({
                size: {
                    x: 5,
                    y: 5
                },
                tiles: [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]
                ]
            });
            break;
        default:
            return state;
    }
};

export default map;