import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlaylists, getToken } from "../../api";
import { Your_Top_mixes } from "../../api/api";
import "./Head.css";

const Head = () => {
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(Your_Top_mixes);
        setData(playlists?.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="header">
      <h2>Your Top mixes</h2>
      <div className="header-image">
        {data.map((item, index) => (
          <Link to={`/details/${item.id}?type=Your_Top_mixes`} key={index}>
            <div className="header-container">
              <img
                className="playlist-imagee"
                src={item.images[0].url}
                alt="photo"
              />
              <p className="head_p">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Head;
