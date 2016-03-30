/**
 * Created by tello on 30/03/2016.
 */
let Root = null;
if (process.env.NODE_ENV === 'development') {
    Root = require('./Root.dev').default;
} else {
    Root = require('./Root.prod').default;
}

export default Root;