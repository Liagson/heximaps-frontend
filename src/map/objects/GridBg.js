/**
 * Created by tello on 25/03/2016.
 */
import axios from 'axios';
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

GridBg.prototype.load = function(){
    const gridBg = this;

    return Promise.all([
        new Promise(function (resolve, reject) {
            gridBg._texture = new THREE.TextureLoader()
                .load(
                    'build/tiles/sprites/tilessprite.min.png',
                    function(){
                        gridBg.material.uniforms.tiles = {
                            type: 't',
                            texture: gridBg._texture,
                            value: gridBg._texture
                        };

                        resolve({});
                    },
                    function(){},
                    function(){
                        reject();
                    }
                );
        }),
        axios.get('build/tiles/sprites/tilessprite.json')
            .then(function (response) {
                gridBg.material.uniforms.texTileSize = {
                    type: 'f',
                    value: (response.data.images[0].width/2) / response.data.width
                };

                var tileSize = response.data.images[0].width/2;
                var widthWithoutBase = response.data.width - tileSize*2;
                var tilesPerRow = 1 + Math.floor(widthWithoutBase / (tileSize*1.5));

                gridBg.material.uniforms.tilesPerRow = {
                    type: 'f',
                    value: tilesPerRow
                };
            })
    ]);
};

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

    this._texture.dispose();
};

export default GridBg;