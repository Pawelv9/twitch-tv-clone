import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null }

    componentDidMount = () => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
  })
}

    authButton() {
        if (this.state.isSignedIn === null) {
            return <div>Please Sing In</div>;
        } else if (this.state.isSignedIn) {
            return <div>Signed In</div>;
        } else if (this.state.isSignedIn === false) {
            return <div>You are not Signed In</div>;
        }
    }

    render() {
        return (
            <div>
                {this.authButton()}
            </div>
        );
    }
}

export default GoogleAuth;