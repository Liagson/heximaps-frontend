/**
 * Created by tello on 28/03/2016.
 */
import THREE from 'three';
import TileGenerator from '../utils/TileGenerator';

const InstancedHexagonBufferGeometry = function (size = 35){
    THREE.InstancedBufferGeometry.call(this);

    const generatedTile = TileGenerator.generate(size);

    const vertices = new THREE.BufferAttribute(new Float32Array(generatedTile.vertices), 2);//ItemSize 2 (x, y)
    this.addAttribute('position', vertices);

    this.setIndex(new THREE.BufferAttribute(new Uint16Array(generatedTile.indices), 1));
};

InstancedHexagonBufferGeometry.prototype = Object.create(THREE.InstancedBufferGeometry.prototype);
InstancedHexagonBufferGeometry.prototype.constructor = InstancedHexagonBufferGeometry;

export default InstancedHexagonBufferGeometry;