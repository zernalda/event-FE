import React, { Component } from 'react';
import Event from './components/page/Event';
// import Switching from './components/Switching'
// import Login from './components/Login'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {isLoggedIn: false};
  //   this.state = {isLoggedIn: true};
  // }
    render() {
      // FOR LOGIN
      // const isLoggedIn = this.state.isLoggedIn;
      // let condition;
  
      // if (isLoggedIn) {
      //   condition = <Switching />;
      // } else {
      //   condition = <Login />;
      // }
  
      return (
        <div className='container main'>
          <Event />
        </div>
      );
    }
}
export default App;
