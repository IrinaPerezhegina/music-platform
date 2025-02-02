import { ITtrack } from '@/types/track'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { Card, Grid2, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import styles from "../styles/TrackItem.module.scss"
type TrackItemProps = {
  track: ITtrack
  active?: boolean
}
const TrackItem = ({ track, active = false }: TrackItemProps) => {
 const router=useRouter()
 return <Card className={styles.track} onClick={()=>router.push('/tracks/'+track._id)}>
    <IconButton onClick={e=>e.stopPropagation()}>
        {!active?<PlayArrow/>:<Pause/>}
    </IconButton>
    <img width={70} height={70} src={track.picture}/>
    <Grid2 container direction={'column'} style={{width:200, margin:'0 20px'}}>
        <div >{track.name}</div>
        <div style={{fontSize:12, color:'gray'}}>{track.artist}</div>
    </Grid2>
    {active && <div >02:42/03:23</div> }
    <IconButton onClick={e=>e.stopPropagation()} style={{marginLeft:'auto'}}>
      <Delete/>
    </IconButton>
    </Card>
}

export default TrackItem
