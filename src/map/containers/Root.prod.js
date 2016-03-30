/**
 * Created by tello on 30/03/2016.
 */
import Map from '../components/Map';
import { Provider } from 'react-redux'
import React, { Component } from 'react';

export default class Root extends Component {
    render(){
        return <div className="root-container">
                <Provider store={this.props.store}>
                    <Map/>
                </Provider>
            </div>;
    }
}