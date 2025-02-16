import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid2, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const TrackPage = ({ serverTrack }: ITrack | any) => {
  const router = useRouter();
  const username = useInput('');
  const text = useInput('');
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const addComment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/tracks/comment',
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (error) {
      console.log(error);
    }
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
        <img
          src={'http://localhost:5000/' + track.picture}
          width={200}
          height={200}
        />
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
        <TextField label={'Ваше имя'} fullWidth {...username} />
        <TextField
          label={'Комментарий'}
          fullWidth
          {...text}
          multiline
          rows={4}
        />
        <Button onClick={addComment}>Отправить</Button>
      </Grid2>
      <div>
        {track?.comments.map((comment: { username: string; text: string }) => (
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
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(
    `http://localhost:5000/tracks/${params?.id}`
  );

  return {
    props: {
      serverTrack: response.data,
    },
  };
};
