import React, { useEffect, useState } from "react";
import Head from "../body/Head";
import left from "../../images/Back.svg";
import right from "../../images/Forward.svg";
import { getPlaylists, getToken } from "../../api";
import { Featured_Api } from "../../api/api";
import { Link } from "react-router-dom";
import Jump from "../body/Jump";
import MadeFor from "../body/MadeFor";
import Reacent from "../body/Reacent";
import Uniquelu from "../body/uniquely";
const SideBarCenter = () => {
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(Featured_Api);
        setData(playlists?.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="SideBarCenter">
      <button className="left__btn">
        <img src={left} alt="" />
      </button>
      <button className="right__btn">
        <img src={right} alt="" />
      </button>
      <h2>Good Afternoon</h2>
      <div className="image-grid">
        {data?.map((item, index) => (
          <Link to={`/details/${item.id}?type=Featured_Api`} key={index}>
            <div className="image-container">
              <img
                className="playlist-image"
                src={item.images[0].url}
                alt="photo"
              />
              <p className="songName">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <Head />
      <MadeFor />
      <Reacent />
      <Jump />
      <Uniquelu />
    </div>
  );
};

export default SideBarCenter;
