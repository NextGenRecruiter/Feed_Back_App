import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App/App.css'
import { connect } from 'react-redux'


//Material UI imports
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class supported extends Component{

    state = {
        supported:0,
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        
        this.setState({
            supported:event.target.value
        })
        
    }

    handleClick = () =>{
        this.props.dispatch({
            type:'SUPPORTED',
            payload:supported,
        })
    }

    render(){

        return(
            <div>
                {JSON.stringify(this.props.reduxState)}
                 <Paper className='layout'>
                    <Typography variant='subtitle1'>How well are you being supported?</Typography>
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
                        <Link to='/understanding'>
                                <Button size="large" variant="outlined" className='btn' color="primary">Back</Button>
                            </Link>
                        <Link to="/comment">
					        <Button size="large" variant="outlined" onClick={this.handleClick} className='btn' color="primary">Next</Button>
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

export default connect(mapReduxState)(supported);