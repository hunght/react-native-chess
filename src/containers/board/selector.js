// @flow
import { Chess } from 'chess.js';
import { createSelector } from 'reselect';

import type { State } from '../../types';
import { DIMENSION, COLUMN_NAMES } from './type';

export const squaresSelector = createSelector(
  (state: State) => state.board.fen,
  (fen) => {
    const game = new Chess(fen);
    const board = game.board();
    const squares = [];
    const history = game.history({ verbose: true });
    const lastMove = history[history.length - 1] || {};
    const inCheck = game.in_check();
    const turn = game.turn();

    board.forEach((row, rowIndex) => {
      row.forEach((square, columnIndex) => {
        const columnName = COLUMN_NAMES[columnIndex];
        const position = `${columnName}${DIMENSION - rowIndex}`;
        const type = square ? square.type : '';
        const color = square ? square.color : '';

        squares.push({
          ...square,
          position,
          columnName,
          rowIndex,
          columnIndex,
          selected: false,
          canMoveHere: false,
          lastMove: position === lastMove.to || position === lastMove.from,
          inCheck: inCheck && turn === color && type === game.KING
        });
      });
    });

    return squares;
  }
);
