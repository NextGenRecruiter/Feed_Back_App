import React, { Component } from 'react';
import Feeling from '../FeedBack/Feeling/Feeling'
import Understanding from '../FeedBack/Understanding/Understanding'
import Suported from '../FeedBack/Supported/Supported'
import Comment from '../FeedBack/Comment/Comment'
import { HashRouter as Router, Route} from 'react-router-dom'

class FeedBack extends Component {
  render() {
    return (
      <div>
      <Router>
        <Route exact path='/Feedling' component={Feeling}></Route>
        <Route exact path='/Understanding' component={Understanding}></Route>
        <Route exact path='/Supported' component={Suported}></Route>
        <Route exact path ='/Comment' component={Comment}></Route>
      </Router>
      </div>
    );
  }
}

export default FeedBack;