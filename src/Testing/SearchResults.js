import React, { Component } from 'react';

import MenuBar from '../Components/MenuBar';
import Quick from '../Components/QuickLinks';
class SearchResults extends Component{
    render(){
        return(
            <div>
                <Quick/>
            <MenuBar/>
            </div>
        );
    }
}

export default SearchResults;