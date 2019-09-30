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

    state = {
        comment:'',
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        
        this.setState({
            comment:event.target.value
        })
        
    }

    handleClick = () =>{
        this.props.dispatch({
            type:'COMMENT',
            payload:comment,
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

export default connect(mapReduxState)(comment);