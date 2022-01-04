import React from 'react';


function CreatePost(props) {
    return (
        <body>
            <h1 id="heading">
                {props.head}
            </h1>
            <p>
                {props.description}
            </p>
        </body>
    );
}

export default PostView;
