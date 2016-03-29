/**
 * Created by tello on 23/03/2016.
 */
import { createStore } from 'redux'
import domready from 'domready';
import mainCss from './main.css';
import mapApp from './map/reducers/index';
import Map from './map/components/Map';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

const store = createStore(mapApp);

domready(function(){
    ReactDOM.render(<Provider store={store}><Map/></Provider>, document.getElementById('container'));
});
