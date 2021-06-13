import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar,Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage,setTweetMessage]=useState("");
    const [tweetImage,setTweetImage]=useState("");
    const sendTweet = e=>{
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Vatsal Khemani",
            username: "vatsaltwitter",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pi.tedcdn.com/r/s3.amazonaws.com/ted.conferences.profiles/00/00/11/7c/0b/1145867.jpeg?"
        });

    setTweetMessage("");
    setTweetImage("");
    
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                 <Avatar src="https://pi.tedcdn.com/r/s3.amazonaws.com/ted.conferences.profiles/00/00/11/7c/0b/1145867.jpeg?"/>
                 <input onChange={e=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
                </div>
                <input onChange={e=>setTweetImage(e.target.value)} value={tweetImage} className="tweetBox_imageInput" placeholder="Optional: Enter image URL" type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>    
        </div>
    )
}

export default TweetBox
