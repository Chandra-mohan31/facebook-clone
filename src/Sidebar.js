import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import {useStateValue} from "./StateProvider";


function Sidebar() {
    const [{user},dispatch] = useStateValue();
    return (
        <div  className="sidebar">
         <SidebarRow  title={user.displayName}  src={user.photoURL} />
         <SidebarRow Icon={LocalHospitalIcon} title="info center" />
         <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
         <SidebarRow Icon={PeopleIcon} title="friends" />
         <SidebarRow Icon={ChatIcon} title="Messenger" />
         <SidebarRow Icon={StorefrontIcon} title="Market Place" />
         <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
         <SidebarRow Icon={ExpandMoreOutlined} title="Market Place" />  
           
        </div>
    )
}

export default Sidebar
