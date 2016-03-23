/**
 * Created by tello on 23/03/2016.
 */
import domready from 'domready';
import Map from './map/Map';

domready(function(){
    const map = new Map(document.getElementById('canvas'));
    map.render();
});
