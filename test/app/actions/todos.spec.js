import { expect } from 'chai';
import * as types from '../../../app/constants/ActionTypes';
import * as actions from '../../../app/actions/todos';

describe('todoapp todo actions', () => {
  it('setTodoList should create SET_TODO_LIST action', () => {
    expect(actions.setTodoList([{ _id: 1, item: 'test' }])).to.eql({
      type: types.SET_TODO_LIST,
      list: [{ _id: 1, item: 'test' }]
    });
  });
});
