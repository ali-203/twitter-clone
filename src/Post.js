
import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

function Post ({ displayName, username, verified, text, image, avatar})
  {
    return (
        <div className="post">
        <div className="post_avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/setting_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
        </div>
            
        </div>
    );
    }

export default Post;
