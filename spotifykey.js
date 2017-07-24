var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '0611ddf3bf9c48fd9dc2906b9fafed88',
  secret: '7d228270aec74aeebbd3f697482a25bb'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});