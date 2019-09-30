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

        axios.post('/feedback', this.props.feedBackReducer)

        .then( () => {
            this.setState({submitted: true});

            this.props.dispatch({type: 'RESET'});
        })

    }


    completedFeedback = () => {
        if (this.props.feedBackReducer.feelings === 0) return false;
        if (this.props.feedBackReducer.understanding === 0) return false;
        if (this.props.feedBackReducer.support === 0) return false;
        if (this.props.feedBackReducer.comments === '') return false;
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
                <Typography variant="body1">Feelings: {this.props.feedBackReducer.feelings}</Typography>
                <Typography variant="body1">Understanding: {this.props.feedBackReducer.understanding}</Typography>
                <Typography variant="body1">Support: {this.props.feedBackReducer.supported}</Typography>
                <Typography variant="body1">Comments: {this.props.feedBackReducer.comment}</Typography>
                {this.SubmitButton()}
            </div>
        );
    }
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Review);