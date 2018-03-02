//@flow
import { Observable } from 'rxjs';

export const setState = (state) => ({
  type: 'SET_STATE',
  payload: state
});
