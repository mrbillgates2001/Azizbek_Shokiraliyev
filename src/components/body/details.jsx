import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Your_Top_mixes } from "../../api/api";
import { FaRegHeart } from "react-icons/fa";
import { getPlaylists, getToken } from "../../api";
import music from "../../images/music.png";
import { FaHeart } from "react-icons/fa";
import "./Head.css";

const Details = () => {
  const { id } = useParams();
  const api = window.location.href;
  const apiUrl = api.toString().split("?type=")[1];
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(Your_Top_mixes);
        const albom = await getPlaylists(
          "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks"
        );
        setData(albom.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [api, apiUrl, id]);

  console.log(data);
  return (
    <div className="return">
      <div className="headMusic">
        <div className="Like_textt">
          <img src={music} alt="music_pohot" />
          <div className="Like_h">
            <p>
              PUBLIC <br /> PLAYLIST
            </p>
            <h1>Songs</h1>
          </div>
        </div>
        <div>
          {data?.map((el, i) => (
            <div className="playlists" key={i}>
              <div className="allIn">
                <span>{i + 1}</span>
                <div className="list_img">
                  <img src={el.track.album.images[0].url} />
                </div>
                <div className="list_name">
                  <p style={{ color: "white" }}>{el.track.artists[0].name}</p>
                </div>
              </div>
              <div className="list_audoi">
                <audio controls src={el.track.preview_url}></audio>
              </div>
              <div className="likes">
                <input
                  className="likes_check"
                  type="checkbox"
                  id={el.track.name + el.track.id}
                />
                <label htmlFor={el.track.name + el.track.id}>
                  <FaRegHeart className="bosh" />
                  <FaHeart className="band" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
