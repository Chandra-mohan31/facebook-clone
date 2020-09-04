import React from 'react';
import "./post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined'; 
//import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutLine";
import NearMeIcon from "@material-ui/icons/NearMe";
import {ExpandMoreOutlined} from "@material-ui/icons";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';



function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
               

            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>like</p>
                  
                </div>
                <div className="post__option">
                        <ChatBubbleOutlinedIcon />
                        <p>comment</p>
                    </div>
                    <div className="post__option">
                        <NearMeIcon />
                        <p>share</p>
                    </div>
                    
                    <div className="post__option">
                        <AccountCircleOutlinedIcon />
                       <ExpandMoreOutlined />
                        <p>comment</p>
                    </div>
            </div>
        </div>
    )
}

export default Post
