import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {  CardContent, CardMedia } from 'material-ui/Card';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

const styles = {
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 300,
    },
    media: {
        height: 100,
    },
    subheading: {
        fontSize: '15px',
        fontWeight: '500',
       // color: 'blueviolet'
    },
    avatar: {
        margin: 10,
      },
      bigAvatar: {
        width: 100,
        height: 100,
        display: 'float',
        marginTop: '-50px',
        marginLeft: '10px',
        border: '3px solid white'
      },
   alignCard:{
       marginLeft: '50px',
       marginBottom: '10px'
   },
  number:{
      fontSize: '20px',
      color:'blueviolet'
  }
};

class MyProfile extends React.Component {
    render(props) {
        const { classes } = this.props;
        return (
            <div className={classes.alignCard}>
          
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://libraries.acm.org/binaries/content/gallery/acm/ctas/publications/nodes-764.jpg/nodes-764.jpg/acm%3Adesktopcta"
                        title="Vipul Rawat"
                    />
                    <Avatar
                         alt="Adelle Charles"
                        src="https://pbs.twimg.com/profile_images/762613616117882880/hoo4dDp1_bigger.jpg"
                        className={classes.bigAvatar}
                    />
                    <CardContent align="left" >
                        <Typography type="headline" component="h2">
                            Vipul Rawat
                        </Typography>
                        <Typography component="p">
                            @Vipul_imi_will
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Grid container className={classes.root} justify="space-between">
                            <Grid item xs={3}>
                                <Typography align="left" className={classes.subheading}>
                            Tweets
                            <span className={classes.number}> 328</span>
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography align="left"  className={classes.subheading}>
                                    Following
                                    <span className={classes.number}> 378</span>
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography align="left" className={classes.subheading}>
                                    Followers
                                    <span className={classes.number}> 146</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
MyProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MyProfile);