import { TrackActionTypes } from '@/types/track';
import axios from 'axios';
import { NextThunkDispatch } from '..';
export const fetchTracks = () => async (dispatch: NextThunkDispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/tracks');
    dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
  } catch (e) {
    dispatch({
      type: TrackActionTypes.FETCH_TRACKS_ERROR,
      payload: 'Произошла ошибка при загрузке треков',
    });
  }
};
