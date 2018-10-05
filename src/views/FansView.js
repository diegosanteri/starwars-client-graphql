import React from 'react';

import {graphql} from 'react-apollo';
import {gql} from 'apollo-boost';

const query = gql`
query FansView($limit: Int!) {
    fans(limit: $limit){
        id
		name
        email
  }
}
`

class FansView extends React.Component {

    render() {
        let {data} = this.props;

        if(data.loading) {
            return <div>Loading</div>
        }

        const fansData = data.fans.map(fan => <div>
            Id: {fan.id} <br/>
            Name: {fan.name} <br/>
            Email: {fan.email} <br/>
            ===================================
        </div>)

        return (
            <div>
                <h1>Fan</h1>
                {fansData}
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

FansView = graphql(query, queryOptions)(FansView);
export default FansView;