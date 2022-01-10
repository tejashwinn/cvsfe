import React from 'react';

import axios from 'axios';

class CreateAddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headingPost: "", descriptionPost: "", selectedFile: null
        };
        this.handleChangeHeading = this.handleChangeHeading.bind(this);
        this.handleChangePassword = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleAdd.bind(this);
    }
    handleChangeHeading(event) {
        this.setState({ emailid: event.target.value })
    }
    handleChangeDescription(event) {
        this.setState({ password: event.target.value })
    }

    homePageSubmit(event) {
        window.location.href = '/';
        event.preventDefault();
    }

    // On file select (from the pop up)
    onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
    };
    handleAdd(event) {
        event.preventDefault();
    }
    // On file upload (click the upload button)
    onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();
        let data=""
        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        // Details of the uploaded file
        // console.log(this.state.selectedFile);
        // Request made to the backend api
        // Send formData object
        axios.post("http://127.0.0.1:8000/upload/", formData)
            .then(function (response) {
                // console.log(response.data);
                // console.log(response);
                data=response.data
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {
        if (this.state.selectedFile) {
            return       (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (
            <body>
                <form onSubmit={this.handleAdd}>
                    <button style={{ float: 'left' }} onClick={this.homePageSubmit}>
                        Home
                    </button>
                    <br />
                    <br />
                    <input typ e="text" value={this.state.headingPost} onChange={this.handleChangeHeading} placeholder="Heading" />
                    <br />
                    <br />
                    <textarea value={this.state.descriptionPost} onChange={this.handleChangeDescription} placeholder="Description..." />
                    <br />
                    {/* <input type="submit" value="Submit" /> */}
                    <br />
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>
                            Upload!
                        </button>
                        {this.fileData()}
                    </div>
                </form>
            </body>
        );
    }
}

export default CreateAddPost;
