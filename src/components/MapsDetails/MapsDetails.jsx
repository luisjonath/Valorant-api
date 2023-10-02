import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MapsDetails.css";

export const MapsDetails = () => {
  const [mapsInfo, setMapsInfo] = useState({});
  const { uuid } = useParams();
  const api = `https://valorant-api.com/v1/maps/${uuid}`;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setMapsInfo(data.data);
      });
  }, [api]);

  const { displayName, splash, displayIcon, narrativeDescription } = mapsInfo;

  return (
    <div className="container-map-info">
      <div className="sub-container-map-info">
        <div className="container-maps-img">
          <div>
            <img src={splash} alt="" />
          </div>
          <div>
            <img src={displayIcon} alt="" />
          </div>
        </div>
        <div className="infomap-container">
          <div>
            <h1>{displayName}</h1>
            <p>{narrativeDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
