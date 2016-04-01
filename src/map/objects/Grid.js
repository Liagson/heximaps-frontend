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

    this._numX = numX;
    this._numY = numY;
    this._size = size;

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

Grid.prototype.getCursorSectorForPosition = function(x, y){
    const horizDivSize = this._size/2;
    const maxGridX = (4 + 3*this._numX)*horizDivSize;

    //Check bounds
    if(x > maxGridX){
        return {
            x: -1,
            y: -1
        };
    }

    const vertDivSize = this._size*Math.sqrt(3)/2;
    const maxGridY = vertDivSize*(((this._numX % 2 === 1)?(1):(0)) + this._numY*2);

    if(y > maxGridY){
        return {
            x: -1,
            y: -1
        };
    }

    return {
        x:  Math.floor(x/(horizDivSize)),
        y: Math.floor(y/vertDivSize)
    };
};

export default Grid;