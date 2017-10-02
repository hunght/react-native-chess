import { Observable } from 'rxjs';
import { getDefaultChapter } from '../services/inkitt';

const handleError = (error) => {
  alert(error.toString());
};

export const getChapterAsync = (callback: ?Function) => (dispatch) => {
  Observable.from(getDefaultChapter()).subscribe(
    (result) => {
      dispatch({
        type: 'GET_CHAPTER_ASYNC',
        data: result
      });
    },
    (error) => {
      handleError(error);
    },
    () => {
      if (callback) {
        callback();
      }
    }
  );
};
