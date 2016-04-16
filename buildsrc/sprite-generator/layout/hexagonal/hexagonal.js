/**
 * Created by tello on 12/04/2016.
 */

var tilesNumCalculator = require('./helper/tilesNumCalculator');
var _ = require('underscore');

function validateImages(images){
    var firstSize = {
        height: images[0].height,
        width: images[0].width
    };

    //Validate the sizes (All files should have the same size)
    for(var i = 1; i < images.length; i++){
        var currImage = images[i];
        if(firstSize.width !== currImage.width || firstSize.height !== currImage.height){
            return false;
        }
    }

    return true;
}

module.exports = function(images, options, callback){
    var sideSize = 0;

    if(images.length === 0){
        callback('No input tiles found for generating the sprite.');
        return;
    }

    if(!validateImages(images)){
        callback("Some tiles have different sizes.");
        return;
    }

    var tileSize = images[0].width / 2;
    var maxTilesPerRow = 0;

    //Try with different texture sizes (power of two)
    var fitsInTexture = false;
    for(var powNum = 0; !fitsInTexture; powNum++){
        sideSize = Math.pow(2, powNum);

        //Get the max tiles width
        maxTilesPerRow = tilesNumCalculator.getTilesPerRow(tileSize, sideSize);
        var maxTilesPerColumn = tilesNumCalculator.getTilesPerColumn(tileSize, sideSize, maxTilesPerRow % 2 === 0);

        if(maxTilesPerColumn * maxTilesPerRow >= images.length){
            fitsInTexture = true;
        }
    }

    var positionedImages = _(images).map(function (image, idx) {
        var coordX = idx % maxTilesPerRow;
        var coordY = (idx - coordX)/maxTilesPerRow;

        var x = coordX*tileSize*1.5;
        var y = coordY*tileSize*Math.sqrt(3.0);

        if(coordX % 2 === 1){
            y += Math.sqrt(3.0)*tileSize/2.0;
        }

        return _.extend({
            x: x,
            y: sideSize - Math.sqrt(3.0)*tileSize -y
        }, image);
    });

    callback(null, {
        width: sideSize,
        height: sideSize,
        images: positionedImages
    });
};