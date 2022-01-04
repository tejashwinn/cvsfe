import React from 'react';

const bcrypt = require('bcryptjs')

class CreateLogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emailid: "", password: "" };
        this.handleChangeEmailID = this.handleChangeEmailID.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmailID(event) {
        this.setState({ emailid: event.target.value })
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        // this.state.password = bcrypt.hashSync(this.state.password, "$2a$10$8//8gRCFEoOw0wQVtiwLoe");
        alert(bcrypt.hashSync(this.state.password, "$2a$10$8//8gRCFEoOw0wQVtiwLoe") + "\n" + this.state.emailid);
        event.preventDefault();
    }

    render() {
        return (
            <body>
                <form onSubmit={this.handleSubmit}>
                    <input typ e="text" value={this.state.emailid} onChange={this.handleChangeEmailID} placeholder="Email ID" />
                    <br />
                    <input type="text" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
            </body>
        );
    }
}

export default CreateLogIn;
