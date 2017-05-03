import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import style from './TodoItem.css';

export default class TodoItem extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (text) => {
    const { todo, deleteTodo, editTodo } = this.props;
    if (text.length === 0) {
      deleteTodo(todo._id);
    } else {
      editTodo(todo._id, text);
    }
    this.setState({ editing: false });
  };

  handleComplete = () => {
    const { todo, completeTodo } = this.props;
    completeTodo(todo._id);
  };

  handleDelete = () => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo._id);
  };

  render() {
    const { todo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.item}
          editing={this.state.editing}
          onSave={this.handleSave}
        />
      );
    } else {
      element = (
        <div className={style.view}>
          <label onDoubleClick={this.handleDoubleClick}>
            <div dangerouslySetInnerHTML={{ __html: todo.item }} />
          </label>
          <button
            className={style.destroy}
            onClick={this.handleDelete}
          />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          [style.editing]: this.state.editing,
          [style.normal]: !this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}
