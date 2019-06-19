import React from 'react';
import {connect} from 'react-redux';

class SummaryBar extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.count} TO DO</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: Object.keys(state.items).length,
});

export default connect(mapStateToProps)(SummaryBar);
