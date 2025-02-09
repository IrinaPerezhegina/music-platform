import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ITrack } from '@/types/track';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid2, IconButton } from '@mui/material';
import { useEffect } from 'react';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';
type PlayerProps = {};
let audio = new Audio();

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
    audio: '',
  };
  const { active, pause, volume, currentTime, duration } = useTypedSelector(
    state => state.player
  );
  const { pauseTrack, playTrack } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      audio.src =
        'http://localhost:5000/audio/a96fbf30-0553-416b-8701-f7832962cf6a.mp3';
    }
  }, []);

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

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
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid2>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};

export default Player;
