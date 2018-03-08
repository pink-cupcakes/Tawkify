import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './client/components/NavigationBar.jsx';
import ImageBanner from './client/components/ImageBanner.jsx';
import SignUp from './client/components/SignUp.jsx'

import css from './style.css';
import Proxima from './assets/fonts/ProximaNova-Black.otf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <ImageBanner />
        <SignUp />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));