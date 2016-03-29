/**
 * Created by tello on 25/03/2016.
 */
import InstancedHexagonBufferGeometry from '../geometries/InstancedHexagonBufferGeometry';
import THREE from 'three';

const GridBg = function (numX, numY){
    const geometry = new InstancedHexagonBufferGeometry();
    geometry.maxInstancedCount = numX * numY;

    const material = new THREE.MeshBasicMaterial({
        color: 0xF1F1F1
    });

    THREE.Mesh.call(this, geometry, material);
};

GridBg.prototype = Object.create(THREE.Mesh.prototype);
GridBg.prototype.constructor = GridBg;

export default GridBg;