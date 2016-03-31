/**
 * Created by tello on 25/03/2016.
 */
import gridFs from '../shaders/grid.fs';
import gridBgVs from '../shaders/grid.vs';
import InstancedHexagonBorderBufferGeometry from '../geometries/InstancedHexagonBorderBufferGeometry';
import THREE from 'three';

const GridBorder = function (numX, numY, size = 35){
    const geometry = new InstancedHexagonBorderBufferGeometry(numX, numY, size);
    const material = new THREE.ShaderMaterial({
        fragmentShader: gridFs,
        vertexShader: gridBgVs,
        uniforms: {
            color: {
                type: 'c',
                value: new THREE.Color(0x333333)
            },
            size: {
                type: 'f',
                value: size
            }
        }
    });

    THREE.Line.call(this, geometry, material);
};

GridBorder.prototype = Object.create(THREE.Line.prototype);
GridBorder.prototype.constructor = GridBorder;
GridBorder.prototype.dispose = function(){
    this.geometry.dispose();
    this.material.dispose();
};

export default GridBorder;