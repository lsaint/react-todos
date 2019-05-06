import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log('props TodoList', props);
    this.allTodos = this.allTodos.bind(this);
  }

  allTodos = () => {
    var ids = Object.keys(this.props.todos);
    var ret = ids.map((k, index) => (
      <TodoItem key={k} id={k} memo={this.props.todos[k]} />
    ));
    console.log('todos.', this.props.todos);
    return ret;
  };

  render() {
    return (
      <div>
        <ul>{this.allTodos()}</ul>
      </div>
    );
  }
}

// This function should be passed as the first argument to connect,
// and will be called every time when the Redux store state changes.
// If you do not wish to subscribe to the store,
// pass null or undefined to connect in place of mapStateToProps.
const mapStateToProps = state => ({
  todos: state.items,
});

export default connect(mapStateToProps)(TodoList);
