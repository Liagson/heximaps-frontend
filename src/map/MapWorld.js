/**
 * Created by tello on 23/03/2016.
 */
import Grid from './objects/Grid';
import THREE from 'three';

export default class MapWorld{
    constructor(canvas, numX = 50, numY = 50){
        this._canvas = canvas;
        this._cachedCursorSector = {
            x: -1,
            y: -1
        };

        this.isReady = false;

        this._cursorSectorListener = function(){};

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
        this._renderer.render(this._scene, this._camera);

        this._grid = new Grid(numX, numY);
        this._scene.add(this._grid);

        canvas.addEventListener('mousemove', this._onMouseMoved.bind(this));
    }
    load(){
        const world = this;

        return this._grid.load().then(function(){
            world.isReady = true;
        });
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
    setTileType(x, y, tileType){
        this._grid.setTileType(x, y, tileType);
    }
    _onMouseMoved(event){
        const cursorSector = this._grid.getCursorSectorForPosition(event.clientX, event.clientY);
        if(cursorSector.x !== this._cachedCursorSector.x || cursorSector.y !== this._cachedCursorSector.y){
            this._cursorSectorListener(cursorSector.x, cursorSector.y);
            this._cachedCursorSector = cursorSector;
        }
    }
    setCursorSectorListener(listener){
        this._cursorSectorListener = listener;
    }
    dispose(){
        this._canvas.removeEventListener('mousemove', this._onMouseMoved.bind(this));

        this._grid.dispose();
    }
}