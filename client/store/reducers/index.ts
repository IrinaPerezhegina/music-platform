import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { trackReducer } from './trackReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  track: trackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const reducer = (state: RootState, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
