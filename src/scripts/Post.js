
import React from 'react'
import "../style/Post.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Avatar } from '@material-ui/core';
function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <QuestionAnswerIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <DoubleArrowIcon/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
