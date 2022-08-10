import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {logoutuser} from "../../redux/apiCalls";


export default function Topbar() {
  const history = useHistory();
  const dispatch = useDispatch()

  const clickLogout = ()=> {
    logoutuser(dispatch);
    history.push("/login")
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" onClick={()=>history.push("/")}>Welcome Admin !</span>
        </div>
        <div className="topRight">
        <span className="topbarIconContainer" onClick={clickLogout}>LOGOUT</span>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
