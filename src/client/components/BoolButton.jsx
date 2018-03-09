import React from 'react';

class BoolButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.active === true && this.props.text === 'Yes') {
      return (
        <div>
          <div className="binary-input-option selected" value="1" id="he ight_factor-0">{this.props.text}</div>
        </div>
      )
    } else if (this.props.active === false && this.props.text === 'No') {
      return (
        <div>
          <div className="binary-input-option selected" value="1" id="he ight_factor-0">{this.props.text}</div>
        </div>
      )
    } else {
      return (
        <div onClick={() => {this.props.toggleState(this.props.type)}}>
          <div className="binary-input-option" value="1" id="he ight_factor-0">{this.props.text}</div>
        </div>
      )
    }
  }
}

export default BoolButton;