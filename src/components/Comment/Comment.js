import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App/App.css'
import { connect } from 'react-redux'


//Material UI imports
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class comment extends Component{

    handleChange = (event) =>{
        console.log(event);
        
        this.props.dispatch({
            type:'FEEDBACK',
            propertyName: this.props.feedBackReducer.comment,
            propertyValue:event.target.value,
        })
        
    }

    render(){

        return(
            <div>
                 <Paper className='layout'>
                    <Typography variant='subtitle1'>Any comments you want to leave?</Typography>
                    <TextField
                        label="Multiline"
                        onChange={this.handleChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                    />
                    <div className='div-container'>
                        <Link to='/supported'>
                                <Button size="large" variant="outlined" className='btn' color="primary">Back</Button>
                            </Link>
                        <Link to='/Review'>
                                <Button size="large" variant="outlined" className='btn' color="primary">Next</Button>
                            </Link>
                        </div>  
                    </Paper>
            </div>
        )
    }
}
const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(comment);