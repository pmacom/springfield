var _ = require('lodash');
var data = require('./data-simpsons');
//var config = require('../config');

var Videos = require('./parseData').loadChannel( 'GoldenGirls' );
console.log( Videos );

// function getChannels( dir ) {
//   var fs = fs || require('fs'),
//     channellist = [],
//     channels = fs.readdirSync( dir );
//
//     channels.forEach( function( channel ) {
//       channellist.push( channel );
//     });
//
//     console.log( "SPRINGFIELD: Found " + channellist.length + " channels", channellist );
//     return channellist;
// };
//
// getChannels( '/media/sda1/Channels');
