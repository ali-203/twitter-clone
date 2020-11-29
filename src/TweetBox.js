
import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox () {
    return(
    <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fkajabi-storefronts-production.global.ssl.fastly.net%2Fkajabi-storefronts-production%2Fthemes%2F284832%2Fsettings_images%2FrLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png&imgrefurl=https%3A%2F%2Fwww.cleverprogrammer.com%2F&tbnid=mqgBT9ZwOyh3vM&vet=12ahUKEwjDktz_x6jtAhXXRisKHbDSA3UQMygAegUIARCoAQ..i&docid=tYhfi0NsIwOLbM&w=886&h=1000&q=clever%20programmer%20logo%20&hl=en&ved=2ahUKEwjDktz_x6jtAhXXRisKHbDSA3UQMygAegUIARCoAQ"> </Avatar>
            <input placeholder="What is happing" type="text"></input>
            <input placeholder="Enter image URL" type="text"></input>

            </div>
            <Button>Tweet</Button>
        </form>
    </div>
    );
}

export default TweetBox;
/*
"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/setting_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black*/