/**
 * Created by tello on 29/03/2016.
 */
import GridBg from './GridBg';
import GridBorder from './GridBorder';
import THREE from 'three';

const Grid = function (numX, numY, size = 35){
    THREE.Object3D.call(this);

    this.add(new GridBg(numX, numY, size));
    this.add(new GridBorder(numX, numY, size));
};

Grid.prototype = Object.create(THREE.Object3D.prototype);
Grid.prototype.constructor = Grid;

export default Grid;