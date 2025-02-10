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
    audio: '',
  };
  const { active, pause, volume, currentTime, duration } = useTypedSelector(
    state => state.player
  );
  const { pauseTrack, playTrack, setActiveTrack, setCurrentTime, setValume } =
    useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      audio.src =
        'http://localhost:5000/audio/88c397c1-3804-4ce7-9bd9-0c6c44587296.mp3';
      audio.volume = volume / 100;
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
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setValume(Number(e.target.value));
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
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
