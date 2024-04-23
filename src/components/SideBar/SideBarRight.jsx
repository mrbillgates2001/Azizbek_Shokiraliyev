import React from "react";
import "../../container/sideBar.css";
import plus from "../../images/nnn.svg";
import manLogo from "../../images/User Plus_S.svg";
import user from "../../images/User Blue.svg";
import textfon from "../../images/Union.svg";
const SideBarRight = () => {
  return (
    <div className="SideBarRight">
      <div className="first_state">
        <h3>Friends Activity</h3>
        <div className="imag">
          <img src={manLogo} alt="man_logo" />
          <img src={plus} alt="plus_logo" />
        </div>
      </div>
      <p className="parag">
        Let friends and followers on Spotify see what you’re listening to.
      </p>
      <div className="user">
        <div className="img1">
          <img src={user} alt="user_logo" />
          <img className="fon" src={textfon} alt="fon_logo" />
        </div>
        <div className="img1">
          <img src={user} alt="user_logo" />
          <img className="fon" src={textfon} alt="fon_logo" />
        </div>
        <div className="img1">
          <img src={user} alt="user_logo" />
          <img className="fon" src={textfon} alt="fon_logo" />
        </div>
      </div>
      <p className="second_p">
        Go to Settings Social and enable “Share my listening activity on
        Spotify.’ You can turn this off at any time.
      </p>
      <div className="button">
        <button>SETTINGS</button>
      </div>
    </div>
  );
};

export default SideBarRight;
