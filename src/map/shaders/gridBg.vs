#define M_PI 3.1415926535897932384626433832795

attribute vec2 gridCoordinate;
attribute float tileType;
attribute float vertexId;

uniform float size;
uniform float texTileSize;
uniform float tilesPerRow;

varying float fTileType;
varying vec2 fUV;

vec4 getVertxPos(float vertexIndex){
    vec2 displ = vec2(texTileSize, sqrt(3.0)/2.0*texTileSize);
    float angle = 2.0 * M_PI / 6.0 * vertexIndex;
    return vec4(texTileSize * cos(angle) + displ.x, texTileSize * sin(angle) + displ.y, 0.0, 1.0);
}

mat4 getTranslationMatrix(vec2 coordinate, float displSize){
    mat4 translationMatrix = mat4(1.0);
    translationMatrix[3][0] = coordinate.x*displSize*1.5;
    translationMatrix[3][1] = coordinate.y*displSize*sqrt(3.0);

    if(mod(coordinate.x, 2.0) == 1.0){
	    translationMatrix[3][1] = translationMatrix[3][1] + sqrt(3.0)*displSize/2.0;
    }

    return translationMatrix;
}

vec2 getTileCoordsFromType(float pTileType){
    float y = floor(pTileType/tilesPerRow);
    float x = pTileType - y*tilesPerRow;

    return vec2(x, y);
}

void main() {
    vec4 calculatedfUV = getTranslationMatrix(getTileCoordsFromType(tileType), texTileSize) * getVertxPos(vertexId);

    fUV = vec2(calculatedfUV.x, calculatedfUV.y);
    gl_Position = projectionMatrix * modelViewMatrix * getTranslationMatrix(gridCoordinate, size) * vec4(position, 1.0);
}