import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WeaponSkinsDetails.css";
import { Loading } from "../Loading/Loading";

export const WeaponSkinsDetails = () => {
  const [skinById, setSkinById] = useState({});

  const { uuid } = useParams();

  const api = `https://valorant-api.com/v1/weapons/skins/${uuid}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setSkinById(data.data);
      });
  }, [api]);

  const { displayName, displayIcon, chromas, levels } = skinById;

  const chromasFiltered = chromas?.filter((e) => e.streamedVideo);

  return (
    <div className="skindetails-container">
      <div className="skinsdetails-sub">
        <div>
          <img src={displayIcon} alt="" className="img-details-skins"/>
          <h2>{displayName}</h2>
        </div>

        <h3 className="chroma-text">Chromas</h3>
         <div className="chromas">
          {chromas ? (
            chromasFiltered?.map((s) => (
              <div key={s.uuid} className="chromas2">
                <div className="displayname-video">
                  <h2>{s.displayName}</h2>
                  <video src={s.streamedVideo} width={420} controls className="videos"/>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>No chromas</p>
            </div>
          )}
        </div> 
        <div>
          <h3>Levels</h3>
          <div className="chromas">
            { 
            levels?.map((s) => (
              <div key={s.uuid}>
                <h2>{s.displayName}</h2>
                <video src={s.streamedVideo} width={420} controls className="videos"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
