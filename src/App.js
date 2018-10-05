import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import HomeView from './views/HomeView';
import PeopleView from './views/PeopleView';
import PersonView from './views/PersonView';
import FansView from './views/FansView';
import FanCreateView from './views/FanCreateView';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
    render() {
        return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Route exact path="/" component={HomeView}/>
                    <Switch>
                        <Route exact path="/people/" component={PeopleView}/>                        
                        <Route exact path="/people/:id/" component={PersonView}/>
                        <Route exact path="/fans/" component={FansView}/>   
                        <Route exact path="/fans/create/" component={FanCreateView}/>                      
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>)
    }
}

export default App;