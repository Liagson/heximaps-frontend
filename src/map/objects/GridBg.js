/**
 * Created by tello on 25/03/2016.
 */
import InstancedHexagonBufferGeometry from '../geometries/InstancedHexagonBufferGeometry';
import THREE from 'three';

const GridBg = function (numX, numY){
    const geometry = new InstancedHexagonBufferGeometry(numX, numY);
    const material = new THREE.ShaderMaterial({
        fragmentShader: 'void main() {\n\tgl_FragColor = vec4( 0.94509803921, 0.94509803921, 0.94509803921, 1.0 );\n}'
    });

    THREE.Mesh.call(this, geometry, material);
};

GridBg.prototype = Object.create(THREE.Mesh.prototype);
GridBg.prototype.constructor = GridBg;

export default GridBg;