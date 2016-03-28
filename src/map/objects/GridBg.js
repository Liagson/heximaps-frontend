/**
 * Created by tello on 25/03/2016.
 */
import THREE from 'three';

const GridBg = function (){
    const geometry = new THREE.PlaneGeometry(200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});

    THREE.Mesh.call(this, geometry, material);
};

GridBg.prototype = Object.create(THREE.Mesh.prototype);
GridBg.prototype.constructor = GridBg;

export default GridBg;