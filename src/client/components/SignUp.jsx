import React from 'react';
import ProgressBar from './ProgressBar.jsx'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <form className='sign-up'>
          <ProgressBar />
          <fieldset>
            <h2 className="fs-title">Tell us a bit about yourself</h2>
            <h3 className="fs-subtitle">
              Tell us a bit about yourself and who you’d like to meet. 
              The more we know, the better. Be candid--this<br />
              info is for our eyes only. 
              Tawkify profiles and photos will forever be 100% confidential.
            </h3>
            <div>
              <input type="text" name="fname" placeholder="First Name"/>
            </div>
            <input type="button" name="next" className="next action-button" value="Next"/>
          </fieldset>
          <fieldset>
            <h2 className="fs-title">Social Profiles</h2>
            <h3 className="fs-subtitle">Your presence on the social network</h3>
            <input type="button" name="previous" className="previous action-button-previous" value="Previous"/>
            <input type="button" name="next" className="next action-button" value="Next"/>
          </fieldset>
          <fieldset>
            <h2 className="fs-title">Create your account</h2>
            <h3 className="fs-subtitle">Fill in your credentials</h3>
            <input type="text" name="email" placeholder="Email"/>
            <input type="password" name="pass" placeholder="Password"/>
            <input type="password" name="cpass" placeholder="Confirm Password"/>
            <input type="button" name="previous" className="previous action-button-previous" value="Previous"/>
            <input type="submit" name="submit" className="submit action-button" value="Submit"/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUp;
