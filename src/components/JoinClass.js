import React from 'react';


class JoinClass extends React.Component {
    constructor(props) {

        super(props);
        this.state = { link: "" };
        this.handleChangeLink = this.handleChangeLink.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLink(event) {
        this.setState({ link: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <body>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.link} onChange={this.handleChangeLink} placeholder="Enter the link" />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
            </body>
        );
    }
}

export default JoinClass;
