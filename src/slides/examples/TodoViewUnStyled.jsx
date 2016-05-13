import React, { PropTypes } from 'react';

function Item(props) {
  return (
    <div>{ props.value }</div>
  );
}

Item.propTypes = {
  value: PropTypes.string.isRequired
};

export default function TodoView(props) {
  const todos = props.todos.map((td, i) => (
    <Item key={ i } value={ td } />
  ));

  return (
    <div>
      <form onSubmit={ props.onAddTodo }>
        <input
            type='text'
            placeholder='Enter todo'
            onChange={ props.onValueChanged }
            value={ props.value } />
      </form>
      { todos }
    </div>
  );
}

TodoView.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired
};
