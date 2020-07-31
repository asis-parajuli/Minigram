import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import './Post.css';

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="Aashish"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Aashish-Parajuli</h3>
            </div>

            <img className="post__image" src="https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg" alt="avatar"></img>
            <h4 className="post__text"><strong>Aashish-Parajuli: </strong>Lost in the wild</h4>
        </div>
    )
}

export default Post
