const { kdTree } = require('kd-tree-javascript');
const points = require('./province.json')

function distance(a, b) {
  var lat1 = a.latitude,
  lon1 = a.longitude,
  lat2 = b.latitude,
  lon2 = b.longitude;
  var rad = Math.PI/180;

  var dLat = (lat2-lat1)*rad;
  var dLon = (lon2-lon1)*rad;
  var lat1 = lat1*rad;
  var lat2 = lat2*rad;

  var x = Math.sin(dLat/2);
  var y = Math.sin(dLon/2);

  var a = x*x + y*y * Math.cos(lat1) * Math.cos(lat2); 
  return Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

var [latitude, longitude] = [
  16.479892, 102.789541
]

var tree = new kdTree(points, distance, ["latitude", "longitude"]);

var nearest = tree.nearest({latitude, longitude}, 1);
  
console.log(nearest);
