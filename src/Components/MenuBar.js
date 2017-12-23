import React from 'react';
import PropTypes from 'prop-types';
//Import - material-ui
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
//Import - material-ui-icons
import HomeIcon from 'material-ui-icons/Home';
import MomentsIcon from 'material-ui-icons/FlashOn';
import NotificationIcon from 'material-ui-icons/NotificationsNone';
import MessageIcon from 'material-ui-icons/MailOutline'
import SearchIcon from 'material-ui-icons/Search';
import CakeIcon from 'material-ui-icons/Cake';
import TextField from 'material-ui/TextField';


const styles = theme =>({
    root: {
      width: '100%',
    },
    appBar:{
        height: 'auto',
        maxHeight: 170
    },
    btn:{
        color: 'blueviolet',
        height: '50px',
        fontWeight: '400'
    },
    btnTweet:{
        borderRadius: '20px',
        color: 'blueviolet',
        background: '#F4F6F9',
        marginLeft: 10
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
        marginBottom: '8px',
      },
      textFieldInput: {
        borderRadius: 24,
        background:'#F4F6F9',
        border: '1px solid #ced4da',
        fontSize: 12,
        padding: '10px 12px',
        height:'12px',
        transition: theme.transitions.create(['border-color', 'border']),
        '&:focus': {
          borderColor: 'blueviolet',
          border: '2px solid blueviolet'
        },
      },
      textFieldFormLabel: {
        fontSize: 18,
      },
      avatar: {
        marginLeft: -275,
        color: 'blueviolet',
        background:'white'
      },
  
      search:{
          position: 'absolute',
          marginTop: -5,
          marginLeft: -45
      }
});

class MenuBar extends React.Component{
   //Render Function
   render(props){
    const { classes } = this.props;
       return(
            <div className={classes.root}>
                <AppBar position="fixed" color="white" className={classes.appBar}>
                    <Toolbar>
                    <Grid container spacing={24} direction="row" alignItems='center' >
                        <Grid item xs={8} >
                            <Button className={classes.btn}  dense='true'>
                                <HomeIcon/>
                                Home
                            </Button>
                            <Button className={classes.btn}  dense='true'>
                                <MomentsIcon/>
                                Moments
                            </Button>
                            <Button className={classes.btn}  dense='true'>
                                <NotificationIcon/>
                                Notifications
                            </Button>
                            <Button className={classes.btn}  dense='true'>
                                <MessageIcon/>
                                Messages
                            </Button>
                        </Grid>       
                        <Grid item>
                            <Avatar alt="Remy Sharp" className={classes.avatar} >
                                <CakeIcon/>
                            </Avatar>
                        </Grid>
                        <Grid item >
                            <div className='test'>
                               <TextField
                                    id="search"
                                    type="search"
                                    placeholder="Search twitter"
                                    InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        root: classes.textFieldRoot,
                                        input: classes.textFieldInput,
                                    },
                                    }}
                                    InputLabelProps={{
                                    shrink: true,
                                    className: classes.textFieldFormLabel,
                                    }}
                                />
                                <IconButton color="gray" className={classes.search}>
                                    <SearchIcon/>
                                </IconButton>
                                
                            <Button className={classes.btnTweet}  raised >Tweet</Button>
                            </div>
                        </Grid> 
                        </Grid>
                    </Toolbar>
                    
                </AppBar>
           
            </div>
       );
   } 
}
MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(MenuBar);