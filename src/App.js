import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';

import Home from "./components/Home";
import './static/css/fixer.css'


class App extends Component {
  
  state = { is_user_editor: false }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
  
  destroy = () => {
      console.log(this.state)
  }
}
export default App
