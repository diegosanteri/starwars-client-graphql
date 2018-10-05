import React from 'react';
import {Link} from 'react-router-dom';

import {graphql} from 'react-apollo';
import {gql} from 'apollo-boost';

const query = gql`
query PeopleView($limit: Int!) {
    people(limit: $limit) {
        id
        name
    }
}
`

class PeopleView extends React.Component {
    render() {
        let {data} = this.props;

        if(data.loading) {
            return <div>Loading</div>
        }

        const peopleData = data.people.map(person => <div><Link to={`/people/${person.id}`}>{person.name}</Link><br/></div>)

        return (
            <div>
                <h1>People</h1>
                {peopleData}
            </div>
        )
    }
}

const queryOptions = {
    options: props => ({
        variables: {
            limit: 10
        }
    })
}

PeopleView = graphql(query, queryOptions)(PeopleView);
export default PeopleView;