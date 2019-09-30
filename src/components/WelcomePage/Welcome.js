import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './welcome.css'
//material UI imports
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



class Welcome extends Component {
    
  render() {
    return (
      <div>
        <Paper className='welcome'>
        <Typography variant='subtitle1'>Your Feedback is important to us please rate your experience</Typography>
       <Link to="/feeling">
					<Button size="large" variant="outlined" color="primary">Start</Button>
				</Link>
        </Paper>
      </div>
    );
  }
}

export default Welcome;