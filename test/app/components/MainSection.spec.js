import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainSection from '../../../app/components/MainSection';
import style from '../../../app/components/MainSection.css';
import TodoItem from '../../../app/components/TodoItem';

function setup(propOverrides) {
  const props = {
    todos: [{
      item: 'Use Redux',
      _id: 0
    }, {
      item: 'Run the tests',
      _id: 1
    }],
    actions: {
      editTodo: sinon.spy(),
      deleteTodo: sinon.spy(),
      completeTodo: sinon.spy(),
      completeAll: sinon.spy(),
      clearCompleted: sinon.spy()
    },
    ...propOverrides
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<MainSection {...props} />);
  const output = renderer.getRenderOutput();

  return { props, output, renderer };
}

describe('todoapp MainSection component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    expect(output.type).to.equal('section');
    expect(output.props.className).to.equal(style.main);
  });

  describe('todo list', () => {
    it('should render', () => {
      const { output, props } = setup();
      const [, list] = output.props.children;
      expect(list.type).to.equal('ul');
      expect(list.props.children.length).to.equal(2);
      list.props.children.forEach((item, index) => {
        expect(item.type).to.equal(TodoItem);
        expect(item.props.todo).to.equal(props.todos[index]);
      });
    });
  });
});
