import React from "react";
import "./Head.css";
import likeimg from "../../images/likeBig.svg";
import left from "../../images/Back.svg";
import right from "../../images/Forward.svg";
const Likes = () => {
  return (
    <div className="LikePage">
      <button className="left__btn">
        <img src={left} alt="" />
      </button>
      <button className="right__btn">
        <img src={right} alt="" />
      </button>

      <div className="Like_text">
        <img src={likeimg} alt="like_phtot" />
        <div className="Like_h">
          <p>
            PUBLIC <br /> PLAYLIST
          </p>
          <h1>Liked Songs</h1>
        </div>
      </div>
    </div>
  );
};

export default Likes;
