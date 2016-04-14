/**
 * Created by tello on 12/04/2016.
 */

var getTilesPerRow = function(tileSize, availableWidth){
    if(availableWidth < tileSize*2){
        return 0;
    }else{
        var widthWithoutBase = availableWidth - tileSize*2;
        return 1 + Math.floor(widthWithoutBase / (tileSize*1.5));
    }
};

var getTilesPerColumn = function(tilesSize, availableHeight, evenColumns){
    var tileHeight = tilesSize*Math.sqrt(3);
    if(availableHeight < tileHeight){
        return 0;
    }else{
        var heightWithoutBase = availableHeight;
        if(evenColumns){
            heightWithoutBase = heightWithoutBase - tileHeight / 2;
        }
        return Math.floor(heightWithoutBase / (tileHeight));
    }
};

module.exports = {
    getTilesPerRow: getTilesPerRow,
    getTilesPerColumn: getTilesPerColumn
};