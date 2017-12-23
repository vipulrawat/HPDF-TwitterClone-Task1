import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import ReplyIcon from 'material-ui-icons/ChatBubbleOutline';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import RetweetIcon from 'material-ui-icons/SwapCalls';
import DirectMessageIcon from 'material-ui-icons/MailOutline';

const styles = theme => ({
  card: {
    width: 600,
   // height: 410
  },
  cardholder:{
    padding: 5,
    marginTop: -20,
    marginLeft: 75,
    width: 515
  },
  media: {
    height: 283,
    width: 505,
    borderRadius: 5,
    marginTop: 5,
    border: '1px solid lightgray'
  },
  avatar: {
    backgroundColor: red[500],
    width: 50,
    height: 50,
  },
  bottomIcons:{
      fontSize: 18
  },
  space:{
      marginLeft: 5,
      marginRight: 5
  }
 
});

class Tweets extends React.Component {
 

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Wired" className={classes.avatar} src="https://pbs.twimg.com/profile_images/615598832726970372/jsK-gBSt_bigger.png" />
            }
            action={
              <IconButton>
                 <ExpandMoreIcon />
              </IconButton>
            }
            title="Wired"
            subheader="@Wired . 1h"
          />
          <CardContent className={classes.cardholder}>
            <Typography component="p">
            In six words, write a story about an intergalactic rescue mission.
            </Typography>
            <CardMedia
            className={classes.media}
            image="http://images.nailsmag.com/post/M-galaxy-1.jpg"
          />
          <CardActions>
          <IconButton aria-label="Reply" className={classes.bottomIcons}>
              <ReplyIcon /><div className={classes.space}/>154
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Retweet" className={classes.bottomIcons}>
              <RetweetIcon /> <div className={classes.space}/>44
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Favorite" className={classes.bottomIcons}>
              <FavoriteIcon /> <div className={classes.space}/>76
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Direct Message" className={classes.bottomIcons}>
              <DirectMessageIcon />
            </IconButton>
          </CardActions>
          </CardContent>
          
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Wired" className={classes.avatar} src="https://pbs.twimg.com/profile_images/923537017694236672/yV61OBYO_bigger.jpg" />
            }
            action={
              <IconButton>
                 <ExpandMoreIcon />
              </IconButton>
            }
            title="The Sad Ghost Club"
            subheader="@thesadghostclub . 1h"
          />
          <CardContent className={classes.cardholder}>
            <Typography component="p">
            It takes courage to make a start, we believe in you.
            </Typography>
            <CardMedia
            className={classes.media}
            image="https://pbs.twimg.com/media/DRp6qjaXkAEqWKU.jpg"
          />
          <CardActions>
          <IconButton aria-label="Reply" className={classes.bottomIcons}>
              <ReplyIcon /><div className={classes.space}/>4
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Retweet" className={classes.bottomIcons}>
              <RetweetIcon /> <div className={classes.space}/>14
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Favorite" className={classes.bottomIcons}>
              <FavoriteIcon /> <div className={classes.space}/>29
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Direct Message" className={classes.bottomIcons}>
              <DirectMessageIcon />
            </IconButton>
          </CardActions>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Aha" className={classes.avatar} src="https://pbs.twimg.com/profile_images/3511834457/ed282c37de4d79f873c7e9b6ea7da342_bigger.png" />
            }
            action={
              <IconButton>
                 <ExpandMoreIcon />
              </IconButton>
            }
            title="Aha!"
            subheader="@aha_io . 1h"
          />
          <CardContent className={classes.cardholder}>
            <Typography component="p">
            Product and project managers each perform unique functions. When aligned properly, they both can shine.
            </Typography>
            <CardMedia
            className={classes.media}
            image="https://pbs.twimg.com/media/DRlm5SRVQAAm6pG.jpg"
          />
          <CardActions>
          <IconButton aria-label="Reply" className={classes.bottomIcons}>
              <ReplyIcon /><div className={classes.space}/>4
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Retweet" className={classes.bottomIcons}>
              <RetweetIcon /> <div className={classes.space}/>14
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Favorite" className={classes.bottomIcons}>
              <FavoriteIcon /> <div className={classes.space}/>29
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Direct Message" className={classes.bottomIcons}>
              <DirectMessageIcon />
            </IconButton>
          </CardActions>
          </CardContent>
          
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Wired" className={classes.avatar} src="https://pbs.twimg.com/profile_images/748214451740958720/A5FPJ1ad_bigger.jpg" />
            }
            action={
              <IconButton>
                 <ExpandMoreIcon />
              </IconButton>
            }
            title="Linus Tech Tips"
            subheader="@LinusTech . 3h"
          />
          <CardContent className={classes.cardholder}>
            <Typography component="p">
            It might not be the best for airflow, or noise, but we think it's going to look frigging sweet 
            </Typography>
            <CardMedia
            className={classes.media}
            image="https://pbs.twimg.com/media/DRmL0C8VAAEpF5F.jpg"
          />
          <CardActions>
          <IconButton aria-label="Reply" className={classes.bottomIcons}>
              <ReplyIcon /><div className={classes.space}/>4
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Retweet" className={classes.bottomIcons}>
              <RetweetIcon /> <div className={classes.space}/>14
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Favorite" className={classes.bottomIcons}>
              <FavoriteIcon /> <div className={classes.space}/>29
            </IconButton>
            <div className={classes.space}/>
            <IconButton aria-label="Direct Message" className={classes.bottomIcons}>
              <DirectMessageIcon />
            </IconButton>
          </CardActions>
          </CardContent>
          
        </Card>
      </div>
    );
  }
}

Tweets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tweets);