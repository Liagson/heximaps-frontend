/**
 * Created by tello on 23/03/2016.
 */
import domready from 'domready';
import mainCss from './main.css';
import Map from './map/components/Map';
import React from 'react';
import ReactDOM from 'react-dom';

domready(function(){
    ReactDOM.render(<Map/>, document.getElementById('container'));
});
