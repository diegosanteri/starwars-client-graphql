import React from 'react';
import {Link} from 'react-router-dom';

class HomeView extends React.Component {

    render() {
        return (<div>
            <div>HomeView</div>
            <br/>
            <Link to={"/people"}>People</Link><br/>
            <Link to={"/fans"}>Fans</Link><br/>
            <Link to={"/fans/create"}>Create Fans</Link>
        </div>)
    }
}

export default HomeView;