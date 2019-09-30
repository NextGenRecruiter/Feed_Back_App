import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App/App.css'


//Material UI imports
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class ThankYou extends Component{

    render(){

        return(
            <div>
                    <Paper>
                        <Typography className="layout">Thank You</Typography>
                    <div className='div-container'>
                        <Link to='/'>
                                <Button size="large" variant="outlined" className='btn' color="primary">Back</Button>
                            </Link>
                        </div>  
                    </Paper>

            </div>
        )
    }
}


export default ThankYou;