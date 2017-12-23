import React from 'react';
import ReactDOM from 'react-dom';
//Custom imports
import MenuBar from './Components/MenuBar';
import MyProfile from './Components/MyProfile';
import Trends from './Components/Trends';
import Tweets from './Components/Tweets';
import WhoToFollow from './Components/WhoToFollow';

import Grid from 'material-ui/Grid';
//Style import
import './Styles/main.css';
import QuickLinks from './Components/QuickLinks';

class App extends React.Component{
    render(){
        return(
       <div>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                                        <MenuBar />
                        </Grid>
                        <Grid item xs style={{marginTop: 50}}>
                                        <MyProfile/>
                                        <Trends/>
                        </Grid>
                        <Grid item xs style={{marginTop: 50}}>
                                        <Tweets/>
                        </Grid>
                        <Grid item xs style={{marginTop: 50}}>
                                        <WhoToFollow/>   
                                        <QuickLinks/>
                        </Grid>
                    </Grid>
       
        </div>
               
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));