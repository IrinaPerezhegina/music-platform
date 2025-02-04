import MainLayout from '@/layouts/MainLayout';
import { ITtrack } from '@/types/track';
import { Button, Grid2, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
  const router = useRouter();
  const track: ITtrack = {
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
  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push('/tracks')}
      >
        К списку
      </Button>
      <Grid2 container style={{ margin: '20px 0' }}>
        <img src={track.picture} width={200} height={200} />
        <div className="">
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid2>
      <h1>Слова в треке</h1>
      <p> {track.text}</p>
      <h1>Комментарии</h1>
      <Grid2>
        <TextField label={'Ваше имя'} fullWidth />
        <TextField label={'Комментарий'} fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid2>
      <div>
        {track.comments.map(comment => (
          <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
