import React from "react";
import SiteBar from "./container/SiteBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/body/details";
import SideBarLeft from "./components/SideBar/SideBarLeft";
import SideBarRight from "./components/SideBar/SideBarRight";
import Likes from "./components/body/Likes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="sitebar">
          <div className="sides">
            <SideBarLeft />
            <Routes>
              <Route path="/Likes" element={<Likes />} />
              <Route path="/" element={<SiteBar />} />
              <Route path="details/:id" element={<Details />} />
            </Routes>
            <SideBarRight />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
