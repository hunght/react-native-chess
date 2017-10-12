// @flow
import type { BoardType } from '../board/type';

export type Id = number;

export type Text = string;

export type Home = {
  +id: Id,
  +fen: Text,
  +completed: boolean
};

export type HomeState = {
  +board: Home,
  +boardType: BoardType
};

export type HomeAction =
  | { type: 'ADD_TODO', +id: Id, +text: Text }
  | { type: 'TOGGLE_TODO', +id: Id };
