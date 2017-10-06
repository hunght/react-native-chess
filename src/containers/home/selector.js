// @flow
import { Chess } from 'chess.js';
import { createSelector } from 'reselect';

import type { State } from '../../types';

export const squaresSelector = createSelector(
  (state: State) => state.board.fen,
  (fen) => {
    return fen;
  }
);
