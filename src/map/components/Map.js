/**
 * Created by tello on 25/03/2016.
 */
import MapWorld from '../MapWorld';
import React from 'react';

export default class Map extends React.Component {
    constructor(){
        super();

        this.state = {
            height: 800,
            width: 800
        };
    }
    componentDidMount(){
        this._map = new MapWorld(this.refs.map);
        this._map.render();
    }
    render() {
        return <canvas className="map" ref="map" id="canvas" height={this.state.height} width={this.state.width}></canvas>;
    }
}