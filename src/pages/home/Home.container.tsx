import React, { Component } from 'react';
import HomeView from './HomeView';

type MyProps = {

}

type MyState = {

}

class Home extends Component<MyProps, MyState> {
  state: MyState = {

  };

  render() {
    return (
      <div>
        <h1>This is Home Screen</h1>
        <HomeView />
      </div>
    );
  }
}

export default Home;
