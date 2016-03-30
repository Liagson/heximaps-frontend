/**
 * Created by tello on 30/03/2016.
 */
import { compose } from 'redux';
import DevTools from '../../containers/DevTools';

export default compose(
    DevTools.instrument()
);