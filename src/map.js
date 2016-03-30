/**
 * Created by tello on 23/03/2016.
 */
import domready from 'domready';
import mainCss from './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './map/containers/Root';
import store from './map/store/index';

domready(function(){
    ReactDOM.render(<Root store={store}/>, document.getElementById('container'));
});
