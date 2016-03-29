/**
 * Created by tello on 28/03/2016.
 */
import THREE from 'three';
import TileGenerator from '../utils/TileGenerator';

const InstancedHexagonBufferGeometry = function (numX, numY, size = 35){
    const tilesNum = numX * numY;

    THREE.InstancedBufferGeometry.call(this);

    const generatedTile = TileGenerator.generate(size);

    const vertices = new THREE.BufferAttribute(new Float32Array(generatedTile.vertices), 2);//ItemSize 2 (x, y)
    this.addAttribute('position', vertices);

    this.setIndex(new THREE.BufferAttribute(new Uint16Array(generatedTile.indices), 1));

    const gridCoordinate = new THREE.InstancedBufferAttribute(new Float32Array(tilesNum * 2), 2, 1);
    for(let y = 0; y < numY; y++){
        for(let x = 0; x < numX; x++){
            gridCoordinate.setXY(y*numX + x, x, y);
        }
    }
    this.addAttribute('gridCoordinate', gridCoordinate);

    this.maxInstancedCount = tilesNum;
};

InstancedHexagonBufferGeometry.prototype = Object.create(THREE.InstancedBufferGeometry.prototype);
InstancedHexagonBufferGeometry.prototype.constructor = InstancedHexagonBufferGeometry;

export default InstancedHexagonBufferGeometry;