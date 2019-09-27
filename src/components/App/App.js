import React, { Component } from 'react';
import Header from '../Header/Header'
import { HashRouter as Router, Route} from 'react-router-dom'
import Review from '../Review/Review'
import Admin from '../Admin/Admin'
import FeedBack from '../FeedBack/FeedBack'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Router>
        <Route exact path='/FeedBack' component={FeedBack}></Route>
        <Route exact path='/Review' component={Review}></Route>
        <Route exact path='/Admin' component={Admin}></Route>
      </Router>
      </div>
    );
  }
}

export default App;
