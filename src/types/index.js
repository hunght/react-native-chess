// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { BoardState, BoardAction } from '../containers/board/type';
import type { HomeState, HomeAction } from '../containers/home/type';

export type ReduxInitAction = { type: '@@INIT' };

export type State = BoardState & HomeState;

export type Action = ReduxInitAction | BoardAction | HomeAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
