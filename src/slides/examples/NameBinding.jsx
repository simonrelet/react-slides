import React from 'react';

export default React.createClass({
  getInitialState() {
    return { todos: [] };
  },
  render() {
    const todos = this.state.todos.map((td, i) => (
      <div key={ i }>{ td }</div>
    ));
    return (
      <div>
        <form>
          <input type='text' placeholder='Enter todo' />
        </form>
        { todos }
      </div>
    );
  }
});
