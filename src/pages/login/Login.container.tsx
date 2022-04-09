import React, { Component } from 'react';
import LoginView from './LoginView';

type MyProps = {

}

type MyState = {

}

class Login extends Component<MyProps, MyState> {
  state: MyState = {
  };

  static onSubmit = (user: object): void => {
    console.log(user);
  };

  render() {
    return (
      <div>
        <LoginView handleSubmit={Login.onSubmit} />
      </div>
    );
  }
}

export default Login;
