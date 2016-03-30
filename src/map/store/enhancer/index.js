/**
 * Created by tello on 29/03/2016.
 */

let enhancer = null;
if (process.env.NODE_ENV === 'development') {
    enhancer = require('./enhancer.dev').default;
} else {
    enhancer = require('./enhancer.prod').default;
}

export default enhancer;