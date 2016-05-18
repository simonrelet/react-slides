import React from 'react';
import TodoView from './TodoView';

export default React.createClass({
  getInitialState() {
    return {
      todos: [],
      value: ''
    }
  },
  handleValueChanged(e) {
    this.setState({ value: e.target.value });
  },
  handleAddTodo(e) {
    e.preventDefault();
    const { state } = this;
    const newTodos = state.todos.concat(state.value);
    this.setState({
      todos: newTodos,
      value: ''
    });
  },
  render() {
    return (
      <TodoView
        onAddTodo={ this.handleAddTodo }
        onValueChanged={ this.handleValueChanged }
        todos={ this.state.todos }
        value={ this.state.value } />
    );
  }
});
