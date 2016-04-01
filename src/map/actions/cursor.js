/**
 * Created by tello on 31/03/2016.
 */
import {CURSOR_CHANGE} from '../constants';

export function changeCursor(x, y) {
    return {
        type: CURSOR_CHANGE,
        x: x,
        y: y
    }
}