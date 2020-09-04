import React ,{useState} from 'react';
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {useStateValue} from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";


function MessageSender() {
    const [{user},dispatch] = useStateValue();
    const [input,setInput] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //db stuff
        db.collection('posts').add({
            message: input,
            timesstamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });
        setInput('');
        setImageUrl('');
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
              <Avatar src={user.photoURL} />
              <form>
                  <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}  className="messageSender__input" placeholder="whats on your mind" />
                  <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="" placeholder="image URL (optional)"  />
                  <button onClick={handleSubmit} type="submit">hidden submit</button>
              </form>
            </div>
            <div className="messageSender__bottom">
             <div className="messageSender__options">
                 <VideocamIcon style={{color: "red"}} />
                 <h4>live video</h4> 
             </div>
             <div className="messageSender__options">
                 <PhotoLibraryIcon style={{color: "green"}} />
                 <h4>Photo/Video</h4>
             </div>
             <div className="messageSender__options">
                 <InsertEmoticonIcon style={{color: "orange"}} />
                 <h4>Feeling/Activity</h4>
             </div>
                
            </div>
        </div>
    )
}

export default MessageSender
