import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlaylists, getToken } from "../../api";
import { Uniquely_api } from "../../api/api";
import "./Head.css";

const Uniquelu = () => {
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(Uniquely_api);
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
      <h2>Uniquely yours</h2>
      <div className="header-image">
        {data.map((item, index) => (
          <Link to={`/details/${item.id}?type=Uniquely_api`} key={index}>
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

export default Uniquelu;
