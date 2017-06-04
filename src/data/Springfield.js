var _ = require('lodash');
var config = require('../../config');
var data = require('./data-simpsons');

// TODO: Allow shuffling per channels
// TODO: Allow shuffling per tv
// TODO: Allow One of each
// TODO: Allow Sort by Id
// TODO: Allow Sort by season

var Springfield = {
  state: {
    channels: [],
    currentChannel: 0,
    currentChannelData: []
  },

  initChannel: function( channel ) {
    console.log('chan', channel);
    // TODO: Get the dir from the config again
    var directory = config.usb + 'Channels/';
    console.log('chan', channel);
    Springfield.state.channels = Springfield.getChannels( directory );
    Springfield.state.currentChannelData = Springfield.findVideos( directory + Springfield.state.channels[ channel ] );
  },

  getRandom: function() {
    return _.sample( Springfield.state.currentChannelData );
  },

  setState: function( state ) {
    if( state && state.length ) {
      state.forEach( function( value, key ) {
        Springfield.state['key'] = value;
      }.bind( this ));
      Springfield.init();
    }
  },

  getSeasonEpisodeFromFileName: function( filename ){
    var exp = '.*?(\\d+).*?(\\d+)';
    var p = new RegExp( exp, ["i"]);
    var match = p.exec( filename );
    if ( match != null ) {
      return {
        season: parseInt(match[1]),
        episode: parseInt(match[2])
      }
    }
  },

  getChannels: function( dir ) {
    var fs = fs || require('fs'),
      channellist = [],
      channels = fs.readdirSync( dir );

      channels.forEach( function( channel ) {
        channellist.push( channel );
      });

      console.log( "SPRINGFIELD: Found " + channellist.length + " channels", channellist );
      return channellist;
  },

  getActiveChannel: function( id ) {
    return;
  },

  findVideos: function( dir ) {
    console.log('SPRINGFIELD: Searching for videos in ' + dir);
    var fs = fs || require('fs'),
        filelist = [],
        files = fs.readdirSync( dir );

    files.forEach(function( file ) {
      var info,
          index,
          files;

      if ( fs.statSync( dir + '/' + file ).isDirectory() ) {
        filelist = Springfield.findVideos( dir + '/' + file, filelist );
      }
      else {
        // TODO: Check against a file type whitelist
        // TODO: Find out what mplayer can actually play
        if( file.indexOf( 'avi' ) > -1 || file.indexOf( 'm4v' ) > -1 ){
          info = Springfield.getSeasonEpisodeFromFileName( file );
          index = _.findIndex( data , info );
          if( index > 0 ){
            data[ index ].filepath = dir + '/' + file;
          }
        }
      }
    });
    files = _.filter( data, 'filepath' );
    console.log('SPRINGFIELD: Found ' + files.length + ' files');
    return files;
  },

};

module.exports = Springfield;
