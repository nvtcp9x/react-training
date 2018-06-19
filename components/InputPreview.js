// @flow

import * as React from 'react';

type Props = {
  value: string,
  onChange: (value: string) => void,
};

class InputPreview extends React.PureComponent<Props> {
  static defaultProps = {
    value: 'value',
  };

  handleChange = (e: Object) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value } = this.props;

    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default InputPreview;
