import React from 'react';

import {graphql} from 'react-apollo';
import {gql} from 'apollo-boost';

const query = gql`
query PersonView($id: String!) {
    person(id: $id) {
        id
        name
        gender
        species {
            name
            homeworld{
                name
                residents{
                    name
                }
            }
        }
    }
}
`

class PersonView extends React.Component {

    render() {
        let {data} = this.props;

        if(data.loading) {
            return <div>Loading</div>
        }

        return (
            <div>
                <h1>Person</h1>
                <div>Id: {data.person.id} <br/></div>
                <div>Name: {data.person.name} <br/></div>
                <div>Gender: {data.person.gender} <br/></div>
                <div>Species</div>
                <ul>
                    {data.person.species.map(specie => 
                        <li>
                            Specie Name: {specie.name} <br/>
                            Specie Homeworld: {specie.homeworld.name}<br/>
                            Residents in this world:
                            {<ul>{specie.homeworld.residents.map(resident=><li>{resident.name}</li>)}</ul>}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

const queryOptions = {
    options: ({match}) => ({
        variables: {
            id: match.params.id
        }
    })
}

PersonView = graphql(query, queryOptions)(PersonView);

export default PersonView;