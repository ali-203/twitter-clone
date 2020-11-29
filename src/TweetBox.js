
import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox () {
    return(
    <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/setting_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"> </Avatar>
            <input placeholder="What is happing" type="text"/>
          

            </div>
            <Button>Tweet</Button>
        </form>
    </div>
    );
}

export default TweetBox;
/*
"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/setting_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black*/