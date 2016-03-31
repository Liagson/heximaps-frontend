/**
 * Created by tello on 31/03/2016.
 */
import {MOUSE_MOVE} from '../constants';

export function mouseMove(x, y) {
    return {
        type: MOUSE_MOVE,
        x: x,
        y: y
    }
}