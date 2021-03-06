import React, { PropTypes } from 'react';
import style from './TodoView.scss';

function Item(props) {
  return (
    <div className={ style.item }>{ props.value }</div>
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
    <div className={ style.todo }>
      <form onSubmit={ props.onAddTodo }>
        <input
            className={ style.input }
            type='text'
            placeholder='Enter todo'
            onChange={ props.onValueChanged }
            value={ props.value } />
      </form>
      <div className={ style.todos }>
        { todos }
      </div>
    </div>
  );
}

TodoView.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired
};
