import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InputPreview from '../components/InputPreview';
import setMessage from '../actions/message';

type Props = {
  dispatch: (action: Object) => void,
  messageReducer: Object,
};

class App extends React.Component<Props> {
  static defaultProps = {
    message: 'message',
  };
  handleChange = value => {
    this.props.dispatch(setMessage(value));
  };

  render() {
    const { message } = this.props.messageReducer;

    return (
      <React.Fragment>
        <InputPreview value={message} onChange={this.handleChange} />
        <p>{message}</p>
        <Link to="/about">
          <button>Go to about page</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default connect(state => state)(App);
