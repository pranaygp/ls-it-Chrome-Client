import React, { Component, PropTypes } from 'react';
import WebSocket from 'reconnecting-websocket';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import { setTodoList } from '../actions/todos';
import style from './App.css';

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators({ setTodoList }, dispatch)
  })
)
export default class App extends Component {
  constructor() {
    super();

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onError = this.onError.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { list: [], text: '' }

  // wsUri = "ws://localhost:3000/"

  apiUri = 'https://frigo.io/1bd5807e-21de-4fbd-9002-87b71bee1b3f'
  // apiUri = "http://localhost:3000/33857227-d9a9-4fbd-9b3b-add2d7d4f56a"
  wsUri = 'wss://frigo.io/'

  componentDidMount() {
    this.websocket = new WebSocket(this.wsUri);
    this.websocket.onopen = this.onOpen;
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage;
    this.websocket.onerror = this.onError;
  }

  onOpen() {
    console.log('CONNECTED');
  }

  onClose() {
    console.log('DISCONNECTED');
  }

  onMessage(evt) {
    console.log('MESSAGE: ', evt.data);
    this.props.actions.setTodoList(JSON.parse(evt.data));
  }

  onError(evt) {
    console.error(evt.data);
  }

  doSend(message) {
    console.log(`SENT: ${message}`);
    websocket.send(message);
  }

  removeTodo(id) {
    console.log(id)
    fetch(this.apiUri, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'remove',
        id
      })
    });
  }

  addTodo(item) {
    fetch(this.apiUri, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'add',
        item
      })
    });
    return true;
  }

  componentWillUnmount() {
    this.onClose();
  }


  render() {
    return (
      <div className={style.normal}>
        <Header addTodo={this.addTodo} />
        <MainSection
          todos={this.props.todos}
          actions={{
            editTodo: console.log, //stub
            deleteTodo: this.removeTodo,
            completeTodo: this.removeTodo
          }}
        />
      </div>
    );
  }
}
