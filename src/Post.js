
import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import { VerifiedUser } from "@material-ui/icons";

function Post ({ displayName, username, verified, text, image, avatar})
  {
    return (
        <div className="post">
        <div className="post_avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/setting_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
        </div>
        <div className="post_body">
        <div className="post_header">
            <div className="post_headerText">
            <h3> Ali Raza{""}
            <span>
                <VerifiedUserIcon className="post_badge"></VerifiedUserIcon>
            </span>
             </h3>
        </div>

        </div>
            </div>
        </div>
    );
    }

export default Post;
