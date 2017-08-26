import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import style from './MainSection.css';

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

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

    return (
      <section className={style.main}>
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
