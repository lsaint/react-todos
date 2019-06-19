import React from 'react';
import {connect} from 'react-redux';
import {delTodo} from '../redux/actions';

class TodoItem extends React.Component {
  handleDelete = () => {
    this.props.delTodo(this.props.id);
  };

  render() {
    return (
      <li>
        <div>
          <input className="floated memo" type="checkbox" />
          {this.props.memo}
          <button
            className="floated button"
            type="button"
            onClick={this.handleDelete}>
            X
          </button>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  {delTodo},
)(TodoItem);
