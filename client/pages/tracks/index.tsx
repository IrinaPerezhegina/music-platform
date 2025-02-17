import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks } from '@/store/actions-creators/track';
import { Box, Button, Card, Grid2 } from '@mui/material';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { error, tracks } = useTypedSelector(state => state.track);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Список треков - музыкальная площадка">
      <Grid2 container justifyContent="center">
        <Card style={{ width: '900px' }}>
          <Box p={3}>
            <Grid2 container justifyContent="space-between">
              <h1>Cписок треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid2>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid2>
    </MainLayout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTracks());
    return { props: {} };
  }
);
