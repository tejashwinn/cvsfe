import react from 'react';
import React from 'react';

import './HomePage.css';

class CreateHomePage extends React.Component {

    signUpSubmit(event) {
        window.location.href = '/signup';

        event.preventDefault();
    }
    logInSubmit(event) {
        window.location.href = '/login';

        event.preventDefault();
    }

    render() {
        return (
            <react.Fragment>
                <body>
                    <h1>College Virtual Space</h1>
                    <button onClick={this.signUpSubmit}>
                        Sign Up
                    </button>
                    <br />
                    <button onClick={this.logInSubmit}>
                        Log In
                    </button>
                </body>
            </react.Fragment>
        );
    }
}

export default CreateHomePage;
