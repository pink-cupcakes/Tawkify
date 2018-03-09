import React from 'react';
import FirstPage from './FirstPage.jsx';
import SecondPage from './SecondPage.jsx';
import ThirdPage from './ThirdPage.jsx'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 1,
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    let nextPage = this.state.progress + 1;
    this.setState({ 'progress': nextPage });
  }

  previous() {
    let prevPage = this.state.progress - 1;
    this.setState({ 'progress': prevPage });
  }

  render() {
    if (this.state.progress === 1) {
      return <FirstPage next={this.next} progress={this.state.progress} />
    } else if (this.state.progress === 2) {
      return <SecondPage next={this.next} previous={this.previous} progress={this.state.progress} />
    } else {
      return <ThirdPage previous={this.previous} progress={this.state.progress} />
    } 
  }
}

export default SignUp;