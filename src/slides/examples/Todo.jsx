import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      todos: [],
      value: ''
    };
  },
  handleChange(e) {
    this.setState({ value: e.target.value });
  },
  handleSubmit(e) {
    e.preventDefault();
    const { state } = this;
    const newTodos = state.todos.concat(state.value);
    this.setState({
      todos: newTodos,
      value: ''
    });
  },
  render() {
    const todos = this.state.todos.map((td, i) => (
      <div key={ i }>{ td }</div>
    ));
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
              type='text'
              placeholder='Enter todo'
              onChange={ this.handleChange }
              value={ this.state.value } />
        </form>
        { todos }
      </div>
    );
  }
});
