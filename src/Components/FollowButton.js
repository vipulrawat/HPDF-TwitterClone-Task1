import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
const styles = {
    button2: {
        backgroundColor: "#fff",
        color: "blueviolet",
        marginTop: '5px',
        fontWeight: 'bold',
        textDecoration: "none",
        border: "1px solid blueviolet",
        borderRadius: '20px',
        padding: "8px 25px",
        transition: "all .15s ease-in-out",
        '&:hover': {
            backgroundColor: '#EDE2FB',
            cursor: 'pointer'
      }
    }
};
class FollowButton extends Component{
    render(props){
        const {classes} = this.props;
        return(
            <div>
                <button className={classes.button2}><span>Follow </span></button>
            </div>
        );  
    }
};
FollowButton.PropTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FollowButton);

