import { expect } from 'chai';
import * as types from '../../../app/constants/ActionTypes';
import todos from '../../../app/reducers/todos';

describe('todoapp todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).to.eql([]);
  });

  it('should handle SET_TODO_LIST', () => {
    expect(
      todos([], {
        type: types.SET_TODO_LIST,
        list: [{ _id: 0, item: 'Run the tests' }]
      })
    ).to.eql([{
      item: 'Run the tests',
      _id: 0
    }]);

    expect(
      todos([{
        item: 'Run the tests',
        _id: 1
      }, {
        item: 'Use Redux',
        _id: 0
      }], {
        type: types.SET_TODO_LIST,
        list: [{ _id: 0, item: 'Run the tests' }]
      })
    ).to.eql([{
      item: 'Run the tests',
      _id: 0
    }]);
  });
});
