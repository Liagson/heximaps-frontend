/**
 * Created by tello on 30/03/2016.
 */
import Map from '../components/Map';
import { Provider } from 'react-redux'
import React, { Component } from 'react';

class Root extends Component {
    render(){
        const mapSize = this.props.map.get('size');
        const mapTiles = this.props.map.get('tiles');

        return <div className="root-container">
                <Provider store={this.props.store}>
                    <Map size={mapSize} tiles={mapTiles}/>
                </Provider>
            </div>;
    }
}

export default connect(function(state){
    return {
        map: state.get('map')
    };
})(Root);