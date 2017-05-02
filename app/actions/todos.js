import * as types from '../constants/ActionTypes';

export function setTodoList(list) {
  return { type: types.SET_TODO_LIST, list };
}
