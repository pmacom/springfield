var _ = require('lodash');
var data = require('./data');
var config = require('../config');

// Returns object with { season: val1, episode: val2 }
function getSeasonEpisodeFromFileName( filename ){
  var exp = '.*?(\\d+).*?(\\d+)';
  var p = new RegExp( exp, ["i"]);
  var match = p.exec( filename );
  if ( match != null ) {
    return {
      season: parseInt(match[1]),
      episode: parseInt(match[2])
    }
  }
}

// Returns data object for video files
var findVideos = function( dir ) {
  var fs = fs || require('fs'),
      filelist = [],
      files = fs.readdirSync( dir );

  files.forEach(function( file ) {
    if ( fs.statSync( dir + '/' + file ).isDirectory() ) {
      filelist = findVideos( dir + '/' + file, filelist );
    }
    else {
      var info = getSeasonEpisodeFromFileName( file );
      var index = _.findIndex( data , info );
      data[ index ].filepath = dir + '/' + file;
    }
  });
  return _.filter( data, 'filepath' );;
};

var videoData = findVideos( config.usb );
console.log( "SPRINGFIELD: Found " + videoData.length + " videos" );
module.exports = videoData;
