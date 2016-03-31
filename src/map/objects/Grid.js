/**
 * Created by tello on 29/03/2016.
 */
import GridBg from './GridBg';
import GridBorder from './GridBorder';
import THREE from 'three';

const Grid = function (numX, numY, size = 35){
    THREE.Object3D.call(this);

    this._gridBg = new GridBg(numX, numY, size);
    this._gridBorder = new GridBorder(numX, numY, size);

    this.add(this._gridBg);
    this.add(this._gridBorder);
};

Grid.prototype = Object.create(THREE.Object3D.prototype);
Grid.prototype.constructor = Grid;
Grid.prototype.setTileType = function(x, y, tileType){
    this._gridBg.setTileType(x, y, tileType);
};

Grid.prototype.dispose = function(){
    this._gridBg.dispose();
    this._gridBorder.dispose();
};

export default Grid;