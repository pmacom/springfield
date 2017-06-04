# Springfield

KeDei 3.5 inch SPI TFTLCD
480x320 16bit/18bit

version 6.1 2016/5/1

sudo sed -i 's/\/dev\/fb0/\/dev\/fb1/g' /usr/share/X11/xorg.conf.d/99-fbturbo.conf

sudo sed -i 's/XKBLAYOUT="gb"/XKBLAYOUT="us"/g' /etc/default/keyboard
sudo apt-get install git
sudo apt-get install npm
sudo apt-get install pmount
sudo blkid | grep "SPRINGFIELD" | cut -d':' -f 1

Install:
  - Move the 'springfield' file from /docs/files into the pi's /etc/init.d/ directory
  - run chmod a+x /etc/init.d/springfield on the pi
  - run update-rc.d transparentproxy defaults on the pi

Todo:
  - find an easy way to run npm install
  - Figure out how mplayer touch events Work
  - Get it to play a random video afterwards

This is what I'm seeing at the end of a video being plaeyd. Whats it mean?
```
  stderr: STATUSLINE
  stderr:
  stderr: :
  stderr:
  stderr: A:1356.0 V:1356.1 A-V: -0.136 ct:  0.020   0/  0  3% 46%  3.4% 0 0
  stderr:
  stderr:

  stdout:   CPLAYER:

  stdout:  AUDIOOUT: [AO_ALSA] alsa-lib: pcm_hw.c:617:(snd_pcm_hw_drain) SNDRV_PCM_IOCTL_DRAIN failed (-5): Input/output error
  ```


```
stderr: STATUSLINE: A:1422.0 V:1422.0 A-V: -0.018 ct:  0.025   0/  0  4% 67%  3.1% 177 0
stderr: STATUSLINE: A:1422.1 V:1422.1 A-V: -0.002 ct:  0.024   0/  0  4% 67%  3.1% 177 0
stderr: STATUSLINE: A:1422.1 V:1422.1 A-V: -0.002 ct:  0.024   0/  0  4% 67%  3.1% 177 0

stdout:   CPLAYER:

stdout:  AUDIOOUT: [AO_ALSA] alsa-lib: pcm_hw.c:617:(snd_pcm_hw_drain) SNDRV_PCM_IOCTL_DRAIN failed (-5): Input/output error
```
