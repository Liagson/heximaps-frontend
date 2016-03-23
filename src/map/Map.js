/**
 * Created by tello on 23/03/2016.
 */
import THREE from 'three';

export default class Map{
    constructor(canvas){
        this._canvas = canvas;

        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;

        this._scene = new THREE.Scene();
        this._camera = new THREE.OrthographicCamera(0, width, 0, height, 0.1, 1000);
        this._camera.position.z = 5;

        this._renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: canvas,
            pixelRatio: window.devicePixelRatio
        });
        this._renderer.setClearColor(0xffffff);
        this._renderer.setSize(width, height);
    }
    render(){
        this._renderer.render(this._scene, this._camera);
    }
}