import React, { Component } from 'react';

import Posts from './Posts';


class PostShow extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return(
            <div>
                <Posts title={"Geek"} content={"This is content"} ></Posts>
                <Posts {...Posts}></Posts>
            </div>
        )
    }
}

export default PostShow;