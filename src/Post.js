import React from 'react';
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from '@material-ui/core';
function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pi.tedcdn.com/r/s3.amazonaws.com/ted.conferences.profiles/00/00/11/7c/0b/1145867.jpeg?"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                           Vatsal Khemani
                           <span className="post__headerSpecial">
                           <VerifiedUserIcon className="post__badge"/>@vatsalkhemani
                           </span> 
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>This is a dummy header text</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/profile_images/1308404028972445700/RR_3-veO_400x400.jpg" alt="img not found"/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
            
        </div>
    )
}

export default Post;
