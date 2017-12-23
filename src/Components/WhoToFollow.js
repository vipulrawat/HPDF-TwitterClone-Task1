import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {  CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

import FollowButton from './FollowButton';

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
    bigAvatar: {
        width: 60,
        height: 60,
      },
      followersname:{
          fontWeight: 'bold',
      },
      bottomBorder:{
          margin: '10px 0px',
      },
      noLink:{
          textDecoration: 'none',
          color: 'blueviolet',
          fontSize: '12px',
          '&:hover':{
              textDecoration: 'underline'
          }
      },
      hr:{
          border: '1px solid lightgray'
      },
      alignCard:{
        marginBottom: '10px'
      }
});

class WhoToFollow extends React.Component{
    render(props){
        const { classes } = this.props;
        return(
            <div className={classes.alignCard}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Who to follow</Typography>
                    <Grid container spacing={12} direction="column">
                        <Grid item xs style={{}}>
                            <Grid container >
                                <Grid item className={classes.bottomBorder} >
                                    <Avatar
                                        alt="Marzia Bisognin"
                                        src="https://pbs.twimg.com/profile_images/943199182214574080/Wx4FOTwd_bigger.jpg"
                                        className={classes.bigAvatar}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Typography type="subheading" className={classes.followersname} >
                                    Marzia Bisognin
                                    </Typography>
                                    <FollowButton/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <hr className={classes.hr}/>
                        <Grid item xs className={classes.bottomBorder}>
                            <Grid container>
                                <Grid item >
                                    <Avatar
                                        alt="Jonas"
                                        src="https://pbs.twimg.com/profile_images/553217692597907457/51EokBwz_normal.jpeg"
                                        className={classes.bigAvatar}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Typography type="subheading" className={classes.followersname} >
                                    Jonas Valanciunas
                                    </Typography>
                                    <FollowButton/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <hr className={classes.hr}/>
                        <Grid item xs className={classes.bottomBorder}>
                            <Grid container>
                                <Grid item >
                                    <Avatar
                                        alt="Hoot Suite"
                                        src="https://pbs.twimg.com/profile_images/860528495843172352/-_Qwshgh_normal.jpg"
                                        className={classes.bigAvatar}
                                    />
                                </Grid>
                                <Grid item xs className={classes.bottomBorder}>
                                    <Typography type="subheading" className={classes.followersname} >
                                    Hoot Suite
                                    </Typography>
                                    <FollowButton/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <hr className={classes.hr}/>
                        <Typography><a href="" className={classes.noLink}>Connect other address books</a></Typography>
                    </Grid>

              </CardContent>
            </Card>
          </div>

        );
    }
}
WhoToFollow.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhoToFollow);