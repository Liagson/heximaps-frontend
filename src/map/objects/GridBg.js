/**
 * Created by tello on 25/03/2016.
 */
import gridBgFs from '../shaders/gridBg.fs';
import gridBgVs from '../shaders/gridBg.vs';
import InstancedHexagonBufferGeometry from '../geometries/InstancedHexagonBufferGeometry';
import THREE from 'three';

const GridBg = function (numX, numY, size = 35){
    const geometry = new InstancedHexagonBufferGeometry(numX, numY, size);
    const material = new THREE.ShaderMaterial({
        fragmentShader: gridBgFs,
        vertexShader: gridBgVs,
        uniforms: {
            color: {
                type: 'c',
                value: new THREE.Color(0xF2F2F2)
            },
            size: {
                type: 'f',
                value: size
            }
        }
    });

    THREE.Mesh.call(this, geometry, material);
};

GridBg.prototype = Object.create(THREE.Mesh.prototype);
GridBg.prototype.constructor = GridBg;
GridBg.prototype.setTileType = function(x, y, tileType){
    debugger;
};

export default GridBg;