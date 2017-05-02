import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import style from './MainSection.css';

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };


  renderToggleAll(completedCount) {
    const { todos } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={console.log}
        />
      );
    }
  }

  renderFooter() {
    const { todos } = this.props;
    const activeCount = todos.length;

    if (todos.length) {
      return (
        <Footer
          activeCount={activeCount}
        />
      );
    }
  }

  render() {
    const { todos, actions } = this.props;

    const completedCount = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );

    return (
      <section className={style.main}>
        {this.renderToggleAll(completedCount)}
        <ul className={style.todoList}>
          {todos.map(todo =>
            <TodoItem key={todo._id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter()}
      </section>
    );
  }
}
