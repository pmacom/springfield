# Springfield

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
