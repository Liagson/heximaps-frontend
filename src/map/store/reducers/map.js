/**
 * Created by tello on 29/03/2016.
 */
import {CURSOR_CHANGE} from '../../constants';
import Immutable from 'immutable';

const map = function(state = [], action){
    switch (action.type) {
        case "@@INIT":
            const sizeX = 40;
            const sizeY = 30;

            const tiles = [];
            //Populate map with random tiles
            for(let y = 0; y < sizeY; y++){
                const rowTiles = [];

                for(let x = 0; x < sizeX; x++){
                    //Get random tile type
                    const randomTileType = Math.floor((Math.random() * 5));

                    rowTiles.push(randomTileType);
                }

                tiles.push(rowTiles);
            }

            return Immutable.fromJS({
                cursor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: sizeX,
                    y: sizeY
                },
                tiles: tiles
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