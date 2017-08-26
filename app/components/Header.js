import React, { PropTypes, Component } from 'react';
import { Offline, Online } from 'react-detect-offline';

import TodoTextInput from './TodoTextInput';
import style from './Header.css';

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header>
        <h1>lsit</h1>
        <Offline>
          <div className={style.offlineAlert}>
            You're offline
          </div>
        </Offline>
        <Online>
          <TodoTextInput
            newTodo
            onSave={this.handleSave}
            placeholder="Add stuff when you think of them!"
          />
        </Online>
      </header>
    );
  }
}
