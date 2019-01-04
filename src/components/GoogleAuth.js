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
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
  })
}
    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    authButton() {
        if (this.state.isSignedIn === null) {
            return <div>Please Sign In</div>;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui blue google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else if (this.state.isSignedIn === false) {
            return (
                <button onClick={this.onSignIn} className="ui green google button">
                    <i className="google icon" />
                    Sign In
                </button>
            )
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