import React from 'react';

import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const mutation = gql`
mutation FanCreateView($fan: fanInput) {
    addFan(fan: $fan){
        id
    }
}
`

class FanCreateView extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(this.form);

        this.props.mutate({variables: {
            fan: {
                name: formData.get('name'),
                email: formData.get('email'),

            }
        }})
        .then(response => {
            if(response.data.addFan.id !== null) {
                window.location.replace('/fans')
            } else {
                console.log(response.data.addFan);
            }
        })
    }

    render() {
        return <div>
            <h1>Create new Fan</h1>
            <form 
                ref = {ref => (this.form=ref)}
                onSubmit = {e => this.handleSubmit(e)}>
                <label>Name: </label>
                <input name="name"/><br/>
                <label>email: </label>
                <input name="email"/><br/>
                <button type="submit">Create</button>
            </form>
        </div>
    }
}

FanCreateView = graphql(mutation)(FanCreateView)

export default FanCreateView;