import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App/App.css'
import { connect } from 'react-redux'


//Material UI imports
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


class understanding extends Component{

    handleChange = (event) =>{
        console.log(event.target.value);
        
        this.props.dispatch({
            type:'FEEDBACK',
            propertyName: this.props.reduxState.feedBackReducer.understanding,
            propertyValue:event.target.value,
        })
        
    }

    render(){

        return(
            <div>
                 <Paper className='layout'>
                    <Typography variant='subtitle1'>How well are you understanding the content?</Typography>
                    <TextField
                        label="Number"
                        onChange={this.handleChange}
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                    />
                    <div className='div-container'>
                        <Link to='/feeling'>
                                <Button size="large" variant="outlined" className='btn' color="primary">Back</Button>
                            </Link>
                        <Link to="/supported">
					        <Button size="large" variant="outlined" className='btn' color="primary">Next</Button>
				        </Link>
                        </div>  
                    </Paper>
                    <p>{JSON.stringify(this.props.reduxState.feedBackReducer)}</p>
            </div>
        )
    }
}
const mapReduxState = (reduxState) => ({
    reduxState
  })

export default connect(mapReduxState)(understanding);