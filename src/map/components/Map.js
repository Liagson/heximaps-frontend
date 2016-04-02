/**
 * Created by tello on 25/03/2016.
 */
import Immutable from 'immutable';
import mapCss from './Map.css';
import MapWorld from '../MapWorld';
import React from 'react';

class Map extends React.Component {
    constructor(){
        super();

        this.state = {
            height: 800,
            width: 800
        };

        this._map = null;
    }
    shouldComponentUpdate(nextProps, nextState){
        const component = this;

        const onCursorSectorChangedChanged = this.props.onCursorSectorChanged !== nextProps.onCursorSectorChanged;
        if(onCursorSectorChangedChanged){
            this._map.setCursorSectorListener(function(x, y){
                component.props.onCursorSectorChanged(x, y);
            });
        }

        //Size
        const sizeChanged = this.props.size !== nextProps.size;

        //Tiles
        const tilesChanged = this.props.tiles !== nextProps.tiles;

        //Cursor
        const cursorChanged = this.props.cursor !== nextProps.cursor;

        const viewportChanged = this.state.height !== nextState.height || this.state.width !== nextState.width;
        return viewportChanged || onCursorSectorChangedChanged || sizeChanged || tilesChanged || cursorChanged;
    }
    componentDidMount(){
        const component = this;

        const map = new MapWorld(this.refs.map, this.props.size.get('x'), this.props.size.get('y'));
        map.setCursorSectorListener(function(x, y){
            component.props.onCursorSectorChanged(x, y);
        });
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

Map.propTypes = {
    cursor: React.PropTypes.instanceOf(Immutable.Map).isRequired,
    onCursorSectorChanged: React.PropTypes.func.isRequired,
    size: React.PropTypes.instanceOf(Immutable.Map).isRequired,
    tiles: React.PropTypes.instanceOf(Immutable.List).isRequired
};

export default Map;