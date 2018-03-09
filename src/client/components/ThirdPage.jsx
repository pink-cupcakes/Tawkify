import React from 'react';
import ProgressBar from './ProgressBar.jsx';

class ThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  dropHandler(ev) {
    console.log('File(s) dropped');
    ev.preventDefault();
  }

  render () {
    return (
      <div>
        <form className='sign-up'>
          <ProgressBar progress={this.props.progress} />
          <fieldset name='Page 3'>
            <h2 className="fs-title">Upload recent photos of yourself</h2>
            <h3 className="fs-subtitle">
              We ask that you upload at least 2 pictures of yourself; but upload as many as you'd like. We encourage<br/>
              you to review your pictures periodically to make sure they are up to date. Snapshots and Selfies just<br/>
              fine here. Remember this image is for our internal use and will not be shared with potential matches –<br/>
              you will also be able to swap it out later if you wish.
            </h3>
            <div className="drop_zone" ondrop={() => {this.dropHandler()}}>
              <div className='drop_zone_contents'>
                <img src='https://image.flaticon.com/icons/svg/747/747924.svg' alt='logo' width='10%' height='auto'/>
                <p>Drag and drop a photo</p>
              </div>
            </div>
            <input type="button" className="upload" value="CHOOSE FILE"/><br/>
            <p className='uploadDescription'>Your pictures must be 4 megabytes or smaller. If you have problems, please contact us at 1 (646) 791-3283</p>
            <input type="button" onClick={() => {this.props.previous()}} className="next action-button" value="Previous"/>
            <input type="button" className="next action-button" value="Save and continue"/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default ThirdPage;