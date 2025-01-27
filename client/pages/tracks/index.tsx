import MainLayout from '@/layouts/MainLayout'
import { ITtrack } from '@/types/track'
import { Box, Button, Card, Grid2 } from '@mui/material'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const tracks: ITtrack[] = [
    {
      _id: '1',
      name: 'Трек 1',
      artist: 'Исполнитель 1',
      text: 'Какой-то текст',
      listens: 5,
      comments: [],
      picture: '',
      audio: '',
    },
    {
      _id: '2',
      name: 'Трек 2',
      artist: 'Исполнитель 2',
      text: 'Какой-то текст',
      listens: 2,
      comments: [],
      picture: '',
      audio: '',
    },
    {
      _id: '3',
      name: 'Трек 3',
      artist: 'Исполнитель 3',
      text: 'Какой-то текст',
      listens: 3,
      comments: [],
      picture: '',
      audio: '',
    },
  ]
  return (
    <MainLayout>
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
        </Card>
      </Grid2>
    </MainLayout>
  )
}

export default Index
