import React, { Component } from 'react';
import Header from '../Header/Header'
import { HashRouter as Router, Route} from 'react-router-dom'
import Welcome from '../WelcomePage/Welcome'
import feeling from '../feeling/feeling'
import understanding from '../understanding/understanding'
import supported from '../Supported/Supported'
import comment from '../Comment/Comment'
import Review from '../Review/Review'


class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Router>
        <Route exact path='/' component={Welcome}></Route>
        <Route exact path='/feeling' component={feeling}></Route>
        <Route exact path='/understanding' component={understanding}></Route>
        <Route exact path='/supported' component={supported}></Route>
        <Route exact path='/comment' component={comment}></Route>
        <Route exact path='/Review' component={Review}></Route>
      </Router>
      </div>
    );
  }
}

export default App;
