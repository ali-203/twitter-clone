import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";

function Feed() {
    return (
        <div className="feed_header">
        <h2>Home</h2>    
        <TweetBox />
        </div>
    )
}

export default Feed
