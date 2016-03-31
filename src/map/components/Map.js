/**
 * Created by tello on 25/03/2016.
 */
import mapCss from './Map.css';
import MapWorld from '../MapWorld';
import React from 'react';

export default class Map extends React.Component {
    constructor(){
        super();

        this.state = {
            height: 800,
            width: 800
        };

        this._map = null;
    }
    componentDidMount(){
        const map = new MapWorld(this.refs.map, this.props.size.get('x'), this.props.size.get('y'));
        //Initialize tiles with the types of the model
        this.props.tiles.forEach(function(row, y){
            row.forEach(function(tileType, x){
                map.setTileType(x, y, tileType);
            });
        });
        map.render();

        window.addEventListener('resize', this._updateSize.bind(this));

        this._map = map;
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this._updateSize.bind(this));
        this._map.dispose();

        this._map = null;
    }
    _updateSize(){
        const height = this.refs.container.offsetHeight;
        const width = this.refs.container.offsetWidth;

        this._map.setSize(width, height);

        this.setState({
            height: height,
            width: width
        });
    }
    render() {
        if(this._map !== null){
            this._map.render();
        }

        return <div className="map-container" ref="container"><canvas className="map" ref="map" id="canvas" height={this.state.height} width={this.state.width}></canvas></div>;
    }
}