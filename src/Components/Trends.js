import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {  CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';


const styles = theme => ({
    card: {
      maxWidth: 300,
    },
    title: {
      marginBottom: 16,
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.palette.text.secondary,
    },
    pos: {
      marginBottom: 12,
      color: theme.palette.text.secondary,
    },
    alignCard:{
      marginLeft: '50px'
  },
  links:{
    color: 'blueviolet',
    fontWeight: 'bold'
    
},
});

class Trends extends React.Component{
    render(props){
        const { classes } = this.props;
        return(
            <div className={classes.alignCard}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Trends for you</Typography>
                <Typography type="headline" className={classes.links}>
                #TopTweet
                </Typography>
                <Typography className={classes.pos}>Someone unknown is tweeting about this.</Typography>
                <Typography type="subheading" className={classes.links}>
                #FeelingFriday
                </Typography>
                <Typography className={classes.pos}>@noOne is spamming this.</Typography>
                <Typography type="subheading" className={classes.links}>
                #ItsForbiddon
                </Typography>
                <Typography className={classes.pos}>There is nothing to hide under this.</Typography>
                <Typography type="subheading" className={classes.links}>
                #NotWorking
                </Typography>
                <Typography className={classes.pos}>This is the mimicry of @vipul_imi_will</Typography>
                <Typography type="subheading" className={classes.links}>
                #bluePassport
                </Typography>
                <Typography className={classes.pos}>2,452 Tweets</Typography>
                <Typography type="subheading" className={classes.links}>
                #Cryptocurrency
                </Typography>
                <Typography className={classes.pos}>This thing is booming right through the sky.</Typography>
                <Typography type="subheading" className={classes.links}>
                #NationalMathematicsDay
                </Typography>
                <Typography className={classes.pos}>657k Tweets</Typography>

              </CardContent>
            </Card>
          </div>

        );
    }
}
Trends.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trends);