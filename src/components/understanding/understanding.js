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
    state = {
        understanding:0,
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        
        this.setState({
            understanding:event.target.value
        })
        
    }

    handleClick = () =>{
        this.props.dispatch({
            type:'UNDERSTANDING',
            payload:understanding,
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
					        <Button size="large" variant="outlined" onClick={this.handleClick} className='btn' color="primary">Next</Button>
				        </Link>
                        </div>  
                    </Paper>
            </div>
        )
    }
}
const mapReduxState = (reduxState) => ({
    reduxState
  })

export default connect(mapReduxState)(understanding);