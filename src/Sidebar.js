import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";



function Sidebar() {
return (
    <div className="sidebar">
    <TwitterIcon />


    <SidebarOption Icon={HomeIcon} text="Home"/>
    <SidebarOption Icon={SearchIcon} text="Explore"/>
    
    
    


    </div>
);

}

export default Sidebar;