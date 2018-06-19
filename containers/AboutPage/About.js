import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import withReducer from '../../withReducer';
import messageReducer from './reducer';
import InputPreview from '../../components/InputPreview';
import setMessage from './actions';
import Button from '../../styles';

type Props = {
  message: string,
  handleMessageChange: () => void,
};

class About extends React.Component<Props> {
  static defaultProps = {
    message: 'message',
  };
  handleChange = e => {
    this.props.handleMessageChange(e);
  };

  render() {
    const { message } = this.props.message ? this.props.message : 'no value';

    return (
      <React.Fragment>
        <InputPreview value={message} onChange={this.handleChange} />
        <p>{message}</p>
        <Link to="/">
          <Button>Go to home page</Button>
        </Link>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  message: state.messageReducer ? state.messageReducer : '',
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleMessageChange(event) {
    dispatch(setMessage(event));
  },
});

export default withReducer('messageReducer', messageReducer)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(About)
);
