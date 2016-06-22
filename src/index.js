var MPlayer = require('./player/mplayer');
var _ = require('lodash');
var Videos = require('./parseData');

var player = new MPlayer({
  debug: true,
  verbose: true,
  fullscreen: true,
  args: [ '-vo', 'sdl', '-framedrop', '-msgcolor', '-msgmodule' ]
});
player.on('start', console.log.bind(this, 'playback started'));
player.on('stop', console.log.bind(this, 'playback Stopped'));
player.on('status', console.log);
//player.openFile('/media/sda1/TestableFormats/Ipad.mp4');
// player.openFile('/home/pi/Springfield/test.m4v');

var randomVideo = _.sample( Videos );
// console.log( `SPRINGFIELD: Playing S${randomVideo.season} EP${randomVideo.episode} - ${randomVideo.title}`);
console.log( "SPRINGFIELD: Playing S" + randomVideo.season + " EP" + randomVideo.episode + " - " + randomVideo.title );
player.openFile( randomVideo.filepath );
player.play();

setTimeout(player.volume.bind(player, 50), 1000);

player.on('touch', function(data, sio, pol){
  console.log( 'BEEENN TOUCHEEEED FOR THE VERY FIRST TIIIMMEEEE... CUSTOM OUTPUT:', data, sio, pol );
})
player.on('status', function(data, sio, pol){
  console.log( 'CUSTOM OUTPUT:', data, sio, pol );
})
console.log(player);

// setInterval(player.pause(), 2000);
