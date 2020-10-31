import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';

import Home from "./components/Home";


class App extends Component {
  
  state = { is_user_editor: false }

  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
        </Fragment>
      </Router>
    )
  }
  
  destroy = () => {
      console.log(this.state)
  }
}
export default App
