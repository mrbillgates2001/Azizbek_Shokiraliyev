import React from "react";
import img1 from "../../images/Home_Fill_S.svg";
import img2 from "../../images/Search_S.svg";
import img3 from "../../images/Library_S.svg";
import img4 from "../../images/Liked Songs_S.svg";
import img5 from "../../images/+Library_S.svg";
import { NavLink } from "react-router-dom";
const SideBarLeft = () => {
  return (
    <div className="SideBarLeft">
      <ul>
        <li>
          <img src={img1} alt="home_icon" />
          <a href="/">Home</a>
        </li>
        <li>
          {" "}
          <img src={img2} alt="serach_icon" /> Search
        </li>
        <li>
          <img src={img3} alt="library_icon" />
          You Library
        </li>
        <br />
        <li>
          <NavLink to="/Likes">
            <img src={img5} alt="library_icon" />
            Liked Songs
          </NavLink>
        </li>
        <li>
          <img src={img4} alt="like_icon" />
          Create Playlist
        </li>
      </ul>
      <div className="b_link">
        <ul>
          <li>Chill Mix</li>
          <li>Insta hit</li>
          <li>Mellow Song</li>
          <li>Happy Hits</li>
          <li>Deep Focus</li>
          <li>Afro Vibes</li>
          <li>Bg Afro Vibes</li>
          <li>Anime Foli</li>
          <li>Chilhop music</li>
          <li>Instrument Study</li>
          <li>OST Complition</li>
          <li>Mixed Feeling</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarLeft;
