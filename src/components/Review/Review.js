import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Review.css';

// material UI imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Review extends Component {

    state = { 
      submitted: false, 
    }

    onSubmit = () => {

        axios.post('/feedback', this.props.reduxState.feedBackReducer)

        .then( () => {
            this.setState({submitted: true});

            this.props.dispatch({type: 'RESET'});
        })

    }


    completedFeedback = () => {
        if (this.props.reduxState.feedBackReducer.feeling === 0) return false;
        if (this.props.reduxState.feedBackReducer.understanding === 0) return false;
        if (this.props.reduxState.feedBackReducer.support === 0) return false;
        if (this.props.reduxState.feedBackReducer.comments === '') return false;
        return true;
    }


    SubmitButton = () => {
        if (!this.completedFeedback()) {
            return <Button variant="contained" disabled>Incomplete</Button>;
        }
        return <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit</Button>;
    }


    render() {
        return (
            <div className="Review">
                <Typography variant="h5">Review</Typography>
                <Typography variant="body1">Feelings: {this.props.reduxState.feedBackReducer.feeling}</Typography>
                <Typography variant="body1">Understanding: {this.props.reduxState.feedBackReducer.understanding}</Typography>
                <Typography variant="body1">Support: {this.props.reduxState.feedBackReducer.supported}</Typography>
                <Typography variant="body1">Comments: {this.props.reduxState.feedBackReducer.comment}</Typography>
                {this.SubmitButton()}
            </div>
        );
    }
}

const mapReduxState = (reduxState) => ({
  reduxState
})


export default connect(mapReduxState)(Review);