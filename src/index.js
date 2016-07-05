var MPlayer = require('./player/mplayer');
var _ = require('lodash');

var Springfield = require('./data/Springfield'),
    randomVideo;

// NOTE: 0 - GoldenGirls, 1 - Simpsons
Springfield.initChannel( _.random(0, 1) );
// randomVideo = Springfield.getRandom();

var player = new MPlayer({
  debug: true,
  verbose: true,
  fullscreen: true,
  args: [ '-vo', 'sdl', '-framedrop', '-msgcolor', '-idle', '-fixed-vo','-msgmodule' ]
});

player.on('start', console.log.bind(this, 'playback started'));
player.on('stop', console.log.bind(this, 'playback Stopped'));
player.on('status', console.log);
//player.openFile('/media/sda1/TestableFormats/Ipad.mp4');
// player.openFile('/home/pi/Springfield/test.m4v');

function playRandomVideo(){
  Springfield.initChannel( _.random(0, 1) );
  var randomVideo = Springfield.getRandom();
  console.log( "SPRINGFIELD: Playing S" + randomVideo.season + " EP" + randomVideo.episode + " - " + randomVideo.title );
  player.openFile( randomVideo.filepath );
  player.play();
}

playRandomVideo();

setTimeout(player.volume.bind(player, 50), 1000);

player.on('touch', function(data, sio, pol){
  console.log( 'BEEENN TOUCHEEEED FOR THE VERY FIRST TIIIMMEEEE... CUSTOM OUTPUT:', data, sio, pol );
  playRandomVideo();
});

player.on('stop', function(data, sio, pol){
  console.log( 'STOP', data, sio, pol );
  playRandomVideo();
});

player.on('status', function(data, sio, pol){
  console.log( 'CUSTOM OUTPUT:', data, sio, pol );
});
console.log(player);

// setInterval(player.pause(), 2000);
