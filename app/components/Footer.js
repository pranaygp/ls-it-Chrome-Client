import React, { PropTypes, Component } from 'react';
import style from './Footer.css';

export default class Footer extends Component {

  static propTypes = {
    activeCount: PropTypes.number.isRequired
  };


  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={style.todoCount}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  render() {
    return (
      <footer className={style.footer}>
        {this.renderTodoCount()}
      </footer>
    );
  }
}
