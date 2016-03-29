/**
 * Created by tello on 20/03/2016.
 */

const indices = [
    0, 2, 1,
    2, 4, 3,
    0, 5, 4,
    0, 4, 2
];

export default class TileGenerator{
    static generate(size = 1){
        const vertices = new Array(6*2);
        //Calculate vertices
        for(let point = 0; point < 6; point++){
            const vrxPointBase = point*2;

            let angle = 2 * Math.PI / 6 * point;
            vertices[vrxPointBase] =  size * Math.cos(angle);
            vertices[vrxPointBase + 1]  =  size * Math.sin(angle);
        }

        return {
            vertices: vertices,
            indices: indices
        };
    }
}