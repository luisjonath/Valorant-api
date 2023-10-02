import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WeaponDetails.css";
import { WeaponSkinsCard } from "../WeaponSkinsCard/WeaponSkinsCard";
import { Loading } from "../Loading/Loading";

export const WeaponDetails = () => {
  const { uuid } = useParams();
  const [infoWeapons, setInfoWeapons] = useState([]);
  const [infoSkinsWeapons, setInfoSkinsWeapons] = useState([]);
  const api = `https://valorant-api.com/v1/weapons/${uuid}`;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setInfoWeapons(data.data);
        setInfoSkinsWeapons(data.data.skins);
      });
  }, [api]);

  const { displayName, shopData, displayIcon, weaponStats } = infoWeapons;
  

  return (
    
    <div className="weapon-detail-container">
      <div className="weapon-detail-container2">
        <div className="weapon-detail-subcon">
          <div className="img-contain-weapon">
            <img src={displayIcon} alt="" className="img-weapon-detail" />
          </div>
          <div className="weapon-detail-three">
            <h1>{displayName}</h1>

            <div>
              {shopData && (
                <div>
                  <h2>Category: {shopData.category}</h2>
                  <h2>Cost: {shopData.cost}</h2>
                </div>
              )}
            </div>
            <ul className="stats-weapon">
              <h2>Stats:</h2>
              {weaponStats && (
                <div>
                  <li>fireRate: {weaponStats.fireRate}</li>
                  <li>runSpeedMultiplier: {weaponStats.runSpeedMultiplier}</li>
                  <li>magazineSize: {weaponStats.magazineSize}</li>
                  <li>equipTimeSeconds: {weaponStats.equipTimeSeconds}</li>
                  <li>reloadTimeSeconds: {weaponStats.reloadTimeSeconds}</li>
                  <li>
                    firstBulletAccuracy: {weaponStats.firstBulletAccuracy}
                  </li>
                  <li>shotgunPelletCount: {weaponStats.shotgunPelletCount}</li>
                </div>
              )}
            </ul>
          </div>
        </div>
      <div className="container-skins">
        <h2 className="container-skins-h2">Skins</h2>
      <WeaponSkinsCard infoSkinsWeapons={infoSkinsWeapons}/>
            </div>
    </div>
      </div>
  );
};
