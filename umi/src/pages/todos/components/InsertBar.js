import React from 'react';

export default class InsertBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodoAsync(e.target[0].value);
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
