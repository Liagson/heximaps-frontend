varying vec2 fUV;
uniform sampler2D tiles;

void main() {
    gl_FragColor = texture2D(tiles, fUV);
}