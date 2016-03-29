/**
 * Created by tello on 25/03/2016.
 */
import gridBgFs from '../shaders/gridBg.fs';
import gridBgVs from '../shaders/gridBg.vs';
import InstancedHexagonBufferGeometry from '../geometries/InstancedHexagonBufferGeometry';
import THREE from 'three';

const GridBg = function (numX, numY){
    const geometry = new InstancedHexagonBufferGeometry(numX, numY);
    const material = new THREE.ShaderMaterial({
        fragmentShader: gridBgFs,
        vertexShader: gridBgVs
    });

    THREE.Mesh.call(this, geometry, material);
};

GridBg.prototype = Object.create(THREE.Mesh.prototype);
GridBg.prototype.constructor = GridBg;

export default GridBg;