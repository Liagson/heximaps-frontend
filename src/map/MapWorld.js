/**
 * Created by tello on 23/03/2016.
 */
import GridBg from './objects/GridBg';
import THREE from 'three';

export default class MapWorld{
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

        const gridBg = new GridBg();
        this._scene.add(gridBg);
    }
    render(){
        this._renderer.render(this._scene, this._camera);
    }
    setSize(width, height){
        this._camera.right = width;
        this._camera.bottom = height;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(width, height);
    }
}