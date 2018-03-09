import React from 'react';
import ProgressBar from './ProgressBar.jsx'
import BoolButton from './BoolButton.jsx'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      heightBool: false,
      incomeBool: false,
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState (preference) {
    if (preference === 'height') {
      let updatedState = !this.state.heightBool;
      this.setState({'heightBool': updatedState});
    } else {
      let updatedState = !this.state.incomeBool;
      this.setState({'incomeBool': updatedState})
    }
  }

  saveContinue () {}

  render () {
    return (
      <div>
        <form className='sign-up'>
          <ProgressBar progress={this.props.progress} />
          <fieldset name='Page 1'>
            <h2 className="fs-title">Tell us a bit about yourself</h2>
            <h3 className="fs-subtitle">
              Tell us a bit about yourself and who you’d like to meet. 
              The more we know, the better. Be candid--this<br />
              info is for our eyes only. 
              Tawkify profiles and photos will forever be 100% confidential.
            </h3>
            <div>
              <div className='row' name='1'>
                <div className='col'>
                  <div className='title'>
                    Your gender
                  </div>
                  <span className="select-wrapper">
                    <select className="form-control no-radius">
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                    </select>
                  </span>
                  <div className='description'>
                    Select your gender.
                  </div>
                </div>
                <div className='col'>
                  <div className='title'>
                    You are seeking
                  </div>
                  <span className="select-wrapper">
                    <select className="form-control no-radius">
                      <option value="1">Men</option>
                      <option value="2">Women</option>
                    </select>
                  </span>
                  <div className='description'>
                    Select the sexual orientation you're seeking
                  </div>
                </div>                
              </div>
              <div className='row' name='2'>
                <div className='col'>
                  <div className='title'>
                    Location
                  </div>
                  <input type="text" className='input' />
                  <div className='description'>
                    Where are you located?
                  </div>
                </div>
                <div className='col'>
                  <div className='title'>
                    Your birthday
                  </div>
                  <div>
                    <input type="text" className='date-input' size="2" maxlength="2" />
                    <input type="text" className='date-input' size="2" maxlength="2" />
                    <input type="text" className='date-input-year' size="4" maxlength="4" />
                  </div>
                </div>              
              </div>
              <div className='row' name='3'>
                <div className='col'>
                  <div className='title'>
                    Your height
                  </div>
                  <span className="select-wrapper">
                    <select className="form-control no-radius">
                      <option value="1">4 ft</option>
                      <option value="2">4 ft 1 in</option>
                      <option value="3">4 ft 2 in</option>
                      <option value="4">4 ft 3 in</option>
                      <option value="5">4 ft 4 in</option>
                      <option value="6">4 ft 5 in</option>
                      <option value="7">4 ft 6 in</option>
                      <option value="8">4 ft 7 in</option>
                      <option value="9">4 ft 8 in</option>
                      <option value="10">4 ft 9 in</option>
                      <option value="11">4 ft 10 in</option>
                      <option value="12">4 ft 11 in</option>
                      <option value="13">4 ft 12 in</option>
                      <option value="14">5 ft</option>
                      <option value="15">5 ft 1 in</option>
                      <option value="16">5 ft 2 in</option>
                      <option value="17">5 ft 3 in</option>
                      <option value="18">5 ft 4 in</option>
                      <option value="19">5 ft 5 in</option>
                      <option value="20">5 ft 6 in</option>
                      <option value="21">5 ft 7 in</option>
                      <option value="22">5 ft 8 in</option>
                      <option value="23">5 ft 9 in</option>
                      <option value="24">5 ft 10 in</option>
                      <option value="25">5 ft 11 in</option>
                      <option value="26">5 ft 12 in</option>
                      <option value="27">6 ft</option>
                      <option value="28">6 ft 1 in</option>
                      <option value="29">6 ft 2 in</option>
                      <option value="30">6 ft 3 in</option>
                      <option value="31">6 ft 4 in</option>
                      <option value="32">6 ft 5 in</option>
                      <option value="33">6 ft 6 in</option>
                      <option value="34">6 ft 7 in</option>
                      <option value="35">6 ft 8 in</option>
                      <option value="36">6 ft 9 in</option>
                      <option value="37">6 ft 10 in</option>
                      <option value="38">6 ft 11 in</option>
                      <option value="39">6 ft 12 in</option>
                      <option value="40">7 ft</option>
                    </select>
                  </span>
                  <div className='description'>
                    What is your height?
                  </div>
                </div>
                <div className='col bool'>
                  <div className='bool-container'>
                    <BoolButton 
                      type='height'
                      active={this.state.heightBool}
                      text='Yes'
                      toggleState={this.toggleState}
                    />
                    <BoolButton
                      type='height'
                      active={this.state.heightBool}
                      text='No'
                      toggleState={this.toggleState}
                    />
                  </div>
                  <div className='description'>
                    Is height a factor in your match preferences?
                  </div>
                </div>                
              </div>
              <div className='row' name='4'>
                <div className='col'>
                  <div className='title'>
                    Occupation
                  </div>
                  <input type="text" className='input' />
                  <div className='description'>
                    What do you do?
                  </div>
                </div>
                <div className='col'>
                  <div className='title'>
                    Income
                  </div>
                  <span className="select-wrapper">
                    <select className="form-control no-radius">
                      <option value="1">Less than $40,000</option>
                      <option value="2">$40,000-$60,000</option>
                      <option value="3">$60,000-$80,000</option>
                      <option value="4">$80,000-$100,000</option>
                      <option value="5">$100,000-$125,000</option>
                      <option value="6">$125,000-$150,000</option>
                      <option value="7">$150,000-$200,000</option>
                      <option value="8">$200,000-$250,000</option>
                      <option value="9">$250,000-500,000</option>
                      <option value="10">$500,000-$1,000,000</option>
                      <option value="11">Rather not say</option>
                    </select>
                  </span>
                  <div className='description'>
                    It's important for us to get a good picture of who you are<br/>
                    so we can find the best match for you!
                  </div>
                </div>                
              </div>
              <div className='row' name='5'>
                <div className='col bool'>
                  <div className='bool-container'>
                    <BoolButton 
                      type='income'
                      active={this.state.incomeBool}
                      text='Yes'
                      toggleState={this.toggleState}
                    />
                    <BoolButton
                      type='income'
                      active={this.state.incomeBool}
                      text='No'
                      toggleState={this.toggleState}
                    />
                  </div>
                  <div className='description'>
                    Is income a factor in your match preferences?
                  </div>
                </div>
                <div className='col'>
                  <div className='title'>
                    Interests
                  </div>
                  <input type="text" className='input' />
                  <div className='description'>
                    Tell us a little more about yourself and what you like to<br/>
                    do. We read everything, so please share!
                  </div>
                </div>
              </div>
            </div>
            <input type="button" onClick={() => {this.props.next()}} name="next" className="next action-button" value="Save and continue"/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FirstPage;
