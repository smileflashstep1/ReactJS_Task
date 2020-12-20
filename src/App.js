import React, { Component } from 'react';
import './assets/App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Layout from './Components/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}

export default App;
