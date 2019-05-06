import React from 'react';
import {addTodo} from '../redux/actions';
import {connect} from 'react-redux';

class InsertBar extends React.Component {
  constructor(props) {
    super(props);
    console.log('props InsertBar', props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(e.target[0].value);
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="New Todo" />
      </form>
    );
  }
}
export default connect(
  null,
  {addTodo},
)(InsertBar);
