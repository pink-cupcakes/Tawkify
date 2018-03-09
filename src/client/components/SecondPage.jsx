import React from 'react';
import ProgressBar from './ProgressBar.jsx'

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <form className='sign-up'>
          <ProgressBar progress={this.props.progress} />
          <fieldset name='Page 2'>
            <h2 className="fs-title">We're here to make dreams come true</h2>
            <h3 className="fs-subtitle">
              At Tawkify, we believe everyone should have their chance at living out their<br/>
              fairytale. Sometimes, all life could use a little nudge. We don't take chances<br/>
              with your life - we're going to get it right the first time!
            </h3>
            <input type="button" onClick={() => {this.props.previous()}} className="next action-button" value="Previous"/>
            <input type="button" onClick={() => {this.props.next()}} className="next action-button" value="Save and continue"/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default SecondPage;