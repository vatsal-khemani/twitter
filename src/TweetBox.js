import React from 'react'
import "./TweetBox.css";
import { Avatar,Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                 <Avatar src="https://pi.tedcdn.com/r/s3.amazonaws.com/ted.conferences.profiles/00/00/11/7c/0b/1145867.jpeg?"/>
                 <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox_imageInput" placeholder="Optional: Enter image URL" type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>    
        </div>
    )
}

export default TweetBox
