//@flow
import { Observable } from 'rxjs';

const handleError = (error) => {
  alert(error.toString());
};

export const getChapterAsync = (callback: ?Function) => (dispatch) => {};

export const setFenString = (fen: string) => ({
  type: 'SET_FEN_STRING',
  payload: { fen }
});
