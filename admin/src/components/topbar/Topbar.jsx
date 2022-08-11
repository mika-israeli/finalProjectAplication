import React from "react";
import "./topbar.css";
<<<<<<< HEAD
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutuser } from "../../redux/apiCalls";
import icon from "../../img/icon.jpg";

/////////////////////
export default function Topbar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickLogout = () => {
    logoutuser(dispatch);
    history.push("/login");
  };
=======
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
>>>>>>> saarbranchv4
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
<<<<<<< HEAD
          <span className="logo" onClick={() => history.push("/")}>
            Welcome Admin !
          </span>
        </div>
        <div className="topRight">
          <span className="topbarIconContainer" onClick={clickLogout}>
            LOGOUT
          </span>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          {/* <img src={icon} alt="logo" /> */}
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
=======
          <span className="logo" onClick={()=>history.push("/")}>Welcome Admin !</span>
        </div>
        <div className="topRight">
        <span className="topbarIconContainer" onClick={clickLogout}>LOGOUT</span>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
>>>>>>> saarbranchv4
        </div>
      </div>
    </div>
  );
}
