import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
      rows: {},
    };
    this.createItem = this.createItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  createItem(e) {
    var key = this.state.itemCount.toString();
    this.setState({
      rows: Object.assign(this.state.rows, {
        [key]: (
          <TodoItem
            key={key}
            memo={e.target[0].value}
            delete={this.handleDelete(key)}
          />
        ),
      }),
    });
    this.setState({itemCount: this.state.itemCount + 1});
  }

  handleDelete = idx => e => {
    this.setState({
      rows: Object.assign(this.state.rows, {[idx]: undefined}),
    });
    this.setState({itemCount: this.state.itemCount - 1});
  };

  render() {
    return (
      <div className="app">
        <SummaryBar itemCount={this.state.itemCount} />
        <ul>{Object.values(this.state.rows)}</ul>
        <InsertBar insert={this.createItem} />
      </div>
    );
  }
}

export default App;

class InsertBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.insert(e);
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

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <div>
          <input className="floated memo" type="checkbox" />
          {this.props.memo}
          <button
            className="floated button"
            type="button"
            onClick={this.props.delete.bind(this)}>
            X
          </button>
        </div>
      </li>
    );
  }
}

class SummaryBar extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.itemCount} TO DO</p>
      </div>
    );
  }
}
