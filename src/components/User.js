import React from 'react';

const bcrypt = require('bcryptjs')

class CreateSignUp extends React.Component {
    constructor(props) {

        super(props);
        this.state = { username: '', firstname: "", lastname: "", emailid: "", password: "" };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmailID = this.handleChangeEmailID.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(event) {

        this.setState({ username: event.target.value });

    }
    handleChangeFirstName(event) {
        this.setState({ firstname: event.target.value });;

    }
    handleChangeLastName(event) {
        this.setState({ lastname: event.target.value });;
    }
    handleChangeEmailID(event) {
        this.setState({ emailid: event.target.value })
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        // this.state.password = bcrypt.hashSync(this.state.password, "$2a$10$8//8gRCFEoOw0wQVtiwLoe");
        alert('\n' + this.state.username + "\n" + bcrypt.hashSync(this.state.password, "$2a$10$8//8gRCFEoOw0wQVtiwLoe") + "\n" + this.state.firstname + "\n" + this.state.lastname);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="SignUpForm">
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername} placeholder="Username" />
                <br />
                <input type="text" value={this.state.firstname} onChange={this.handleChangeFirstName} placeholder="First Name" />
                <br />
                <input type="text" value={this.state.lastname} onChange={this.handleChangeLastName} placeholder="Last Name" />
                <br />
                <input typ e="text" value={this.state.emailid} onChange={this.handleChangeEmailID} placeholder="Email ID" />
                <br />
                <input type="text" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form>
        );
    }
}
export default CreateSignUp;

