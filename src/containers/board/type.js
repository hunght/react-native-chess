// @flow

export const DIMENSION = 8;
export const COLUMN_NAMES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export type Id = number;

export type Text = string;

export type Board = {
  +id: Id,
  +fen: Text,
  +completed: boolean
};

export type BoardState = {
  +board: Board
};

export type BoardAction =
  | { type: 'ADD_TODO', +id: Id, +text: Text }
  | { type: 'TOGGLE_TODO', +id: Id };
