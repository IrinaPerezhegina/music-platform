import { ITtrack } from '@/types/track'
import { Box, Grid2 } from '@mui/material'
import TrackItem from './TrackItem'

type TrackListProps = {
  tracks: ITtrack[]
}
const TrackList = ({ tracks }: TrackListProps) => {
  return (
    <Grid2 container direction={'column'}>
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid2>
  )
}

export default TrackList
