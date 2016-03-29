/**
 * Created by tello on 28/03/2016.
 */
import THREE from 'three';
import TileGenerator from '../utils/TileGenerator';

const InstancedHexagonBorderBufferGeometry = function (numX, numY, size = 35){
    const tilesNum = numX * numY;

    THREE.InstancedBufferGeometry.call(this);

    const generatedTile = TileGenerator.generate(size);

    const vertices = new THREE.BufferAttribute(new Float32Array(generatedTile.vertices), 2);//ItemSize 2 (x, y)
    this.addAttribute('position', vertices);

    this.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 3, 4, 5, 0]), 1));

    const gridCoordinate = new THREE.InstancedBufferAttribute(new Float32Array(tilesNum * 2), 2, 1);
    for(let y = 0; y < numY; y++){
        for(let x = 0; x < numX; x++){
            gridCoordinate.setXY(y*numX + x, x, y);
        }
    }
    this.addAttribute('gridCoordinate', gridCoordinate);

    this.maxInstancedCount = tilesNum;
};

InstancedHexagonBorderBufferGeometry.prototype = Object.create(THREE.InstancedBufferGeometry.prototype);
InstancedHexagonBorderBufferGeometry.prototype.constructor = InstancedHexagonBorderBufferGeometry;

export default InstancedHexagonBorderBufferGeometry;