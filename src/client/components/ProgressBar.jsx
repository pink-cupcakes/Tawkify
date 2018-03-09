import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul className='progressbar'>
          <li className={ this.props.progress === 1 ? 'active' : undefined }><a>About yourself</a></li>
          <li className={ this.props.progress === 2 ? 'active' : undefined }><a>Ideal partner</a></li>
          <li className={ this.props.progress === 3 ? 'active' : undefined }><a>Add photos</a></li>
        </ul>
      </div>
    )
  }
}

export default ProgressBar;