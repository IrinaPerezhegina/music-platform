import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ITrack } from '@/types/track';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid2, IconButton } from '@mui/material';
import { useEffect } from 'react';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';
type PlayerProps = {};
let audio: any;

const Player = ({}: PlayerProps) => {
  const track: ITrack = {
    _id: '1',
    name: 'Трек 1',
    artist: 'Исполнитель 1',
    text: 'Какой-то текст',
    listens: 5,
    comments: [],
    picture:
      'https://avatars.mds.yandex.net/i?id=7809e4eae60352f45484a9eff53c962b64fd19b707b5f0ba-12938349-images-thumbs&n=13',
    audio:
      'http://localhost:5000/audio/c81846c1-1aad-4112-a87f-0be311f07d16.mp3',
  };
  const { active, pause, volume, currentTime, duration } = useTypedSelector(
    state => state.player
  );
  const {
    pauseTrack,
    playTrack,
    setActiveTrack,
    setDuration,
    setCurrentTime,
    setValume,
  } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };
  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setValume(Number(e.target.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid2
        container
        direction={'column'}
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
      </Grid2>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
