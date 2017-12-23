import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {  CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = theme => ({
    card: {
      maxWidth: 300,
    },
    title: {
        marginBottom: 0,
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.palette.text.secondary,
      },
    bottomBorder:{
          margin: '10px 0px',
          borderBottom:'1px solid lightgray',
    },
    noLink:{
          textDecoration: 'none',
          color: 'gray',
          fontSize: '12px',
          '&:hover':{
              textDecoration: 'underline',
              color: 'blueviolet'
            }
    },
    advLink:{
        textDecoration: 'none',
          color: 'blueviolet',
          fontSize: '12px',
          '&:hover':{
              textDecoration: 'underline'
          }
    },
    links:{
        fontSize: '12px',
        color: 'gray',
        marginBottom: '10px',
        
    },
    hr:{
        border: '1px solid lightgray'
    },
 
});

class QuickLinks extends React.Component{
    render(props){
        const { classes } = this.props;
        return(
            <div>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Who to follow</Typography>
                    <Grid container spacing={12} direction="column">
                        <Grid item className={classes.test} >
                        <Typography className={classes.links}>
                                2017 Twitter <a href='' className={classes.noLink}>About</a> | <a href='' className={classes.noLink}>Help Center</a> | <a href='' className={classes.noLink}>Terms</a> | <a href='' className={classes.noLink}>Privacy Policy</a> | <a href='' className={classes.noLink}>Cookies</a> | <a href='' className={classes.noLink}>Ads info</a> | <a href='' className={classes.noLink}>Brand</a> | <a href='' className={classes.noLink}>Blog</a> | <a href='' className={classes.noLink}>Status</a> | <a href='' className={classes.noLink}>Apps</a> | <a href='' className={classes.noLink}>Jobs</a> | <a href='' className={classes.noLink}>Marketing</a> | <a href='' className={classes.noLink}>Businesses</a> | <a href='' className={classes.noLink}>Developers</a>
                        </Typography>
                        </Grid>
                        <hr className={classes.hr}/>
                        <Grid item>
                            <Typography><a href="" className={classes.advLink} >Advertise with twitter</a></Typography>
                        </Grid>
                    </Grid>
              </CardContent>
            </Card>
          </div>

        );
    }
}
QuickLinks.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuickLinks);