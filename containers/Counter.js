// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
  increment: () => void,
  count: number,
};

class Counter extends Component<Props> {
  componentDidMount() {
    setInterval(() => {
      this.props.increment();
    }, 500);
  }

  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({ count: state.count });
const mapDispatchToProps = {
  increment: () => ({ type: 'INCREMENT' }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
