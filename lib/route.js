var tflAppId = '83220f6f'
var tfLKeyId ='b8255e01b800e26ef02cfc8aafc3c7df'
var tfl = require('tfl.api')(tflAppId, tfLKeyId);

var Route = function(start, end){
  this.start = start;
  this.end = end;
  this.info = {};
};

Route.prototype.get = function(){
    var request = tfl.journey(this.start, this.end, {mode: 'bus'});
    console.log(request);
    return request;
};

module.exports = Route;
