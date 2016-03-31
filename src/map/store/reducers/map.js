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
                    [0, 1, 2, 3, 4],
                    [2, 4, 1, 0, 3],
                    [3, 1, 2, 4, 4],
                    [0, 4, 3, 0, 1],
                    [1, 3, 0, 2, 0]
                ]
            });
            break;
        default:
            return state;
    }
};

export default map;