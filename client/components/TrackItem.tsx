import { ITtrack } from '@/types/track'
import { Pause, PlayArrow } from '@mui/icons-material'
import { Card, Grid2, IconButton } from '@mui/material'
import styles from "../styles/TrackItem.module.scss"
type TrackItemProps = {
  track: ITtrack
  active?: boolean
}
const TrackItem = ({ track, active = false }: TrackItemProps) => {
  return <Card className={styles.track}>
    <IconButton>
        {active?<PlayArrow/>:<Pause/>}
    </IconButton>
    <img width={70} height={70} src={track.picture}/>
    <Grid2 container direction={'column'} style={{width:200, margin:'0 20px'}}>
        <div >{track.name}</div>
        <div style={{fontSize:12, color:'gray'}}>{track.artist}</div>
    </Grid2>
    </Card>
}
// 1:15:18
export default TrackItem
