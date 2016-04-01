attribute vec2 gridCoordinate;
attribute float tileType;

uniform float size;

varying float fTileType;

mat4 getTranslationMatrix(){
    mat4 translationMatrix = mat4(1.0);
    translationMatrix[3][0] = gridCoordinate.x*size*1.5;
    translationMatrix[3][1] = gridCoordinate.y*size*sqrt(3.0);

    if(mod(gridCoordinate.x, 2.0) == 1.0){
	    translationMatrix[3][1] = translationMatrix[3][1] + sqrt(3.0)*size/2.0;
    }

    return translationMatrix;
}

void main() {
    fTileType = tileType;
    gl_Position = projectionMatrix * modelViewMatrix * getTranslationMatrix() * vec4(position, 1.0 );
}