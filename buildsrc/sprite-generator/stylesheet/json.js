/**
 * Created by tello on 14/04/2016.
 */

var fs = require('fs');
var _ = require('underscore');


module.exports = function(layout, stylesheetPath, spritePath, options, callback){
    var images = _(layout.images).map(function (image, idx) {
        return {
            x: image.x,
            y: image.y,
            width: image.width,
            height: image.height
        };
    });

    var jsonExport = {
        width: layout.width,
        height: layout.height,
        images: images
    };

    fs.writeFile(stylesheetPath, JSON.stringify(jsonExport, null, 4), callback);
};