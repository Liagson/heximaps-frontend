attribute vec2 gridCoordinate;
attribute float tileType;

uniform float size;

varying float fTileType;

mat4 getTranslationMatrix(){
    mat4 translationMatrix = mat4(1.0);
    translationMatrix[3][0] = gridCoordinate.x*3.0*size;
    translationMatrix[3][1] = gridCoordinate.y*size*sqrt(3.0)/2.0;

    if(mod(gridCoordinate.y, 2.0) == 1.0){
        translationMatrix[3][0] = translationMatrix[3][0] + size*1.5;
    }

    return translationMatrix;
}

void main() {
    fTileType = tileType;
    gl_Position = projectionMatrix * modelViewMatrix * getTranslationMatrix() * vec4(position, 1.0 );
}