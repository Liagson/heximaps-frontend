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

    this._numX = numX;
    this._numY = numY;

    THREE.Mesh.call(this, geometry, material);
};

GridBg.prototype = Object.create(THREE.Mesh.prototype);
GridBg.prototype.constructor = GridBg;
GridBg.prototype.setTileType = function(x, y, tileType){
    const offset = y*this._numX + x;

    const tileAttr = this.geometry.attributes.tileType;
    tileAttr.setX(offset, tileType);

    //If only one change set, use bufferSubData, if more changes set, update the entire attribute
    if(tileAttr.updateRange.count === -1){
        tileAttr.updateRange.offset = offset;
        tileAttr.updateRange.count = 1;
    }else{
        tileAttr.updateRange.offset = 0;
        tileAttr.updateRange.count = -1;
    }
    tileAttr.needsUpdate = true;
};
GridBg.prototype.dispose = function(){
    this.geometry.dispose();
    this.material.dispose();
};

export default GridBg;