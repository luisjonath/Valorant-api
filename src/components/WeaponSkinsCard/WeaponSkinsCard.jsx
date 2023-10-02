import React from "react";
import "./WeaponSkinsCard.css"
import { Loading } from "../Loading/Loading";
import { Link } from "react-router-dom";

export const WeaponSkinsCard = ({ infoSkinsWeapons }) => {

    const skins = infoSkinsWeapons.filter((e) => e.displayIcon)

  return (
    <div className="container-weapons-card">
      {skins.length === 0 ?<Loading/> :
      skins.map((e) => (
        <Link to={`/weapons/skin/${e.uuid}`} key={e.uuid} className="skinstext">
        <div key={e.uuid} className="subcontainer-card-weapons">
        <img src={e.displayIcon} alt="" />
          <h2>{e.displayName}</h2>
        </div>
        </Link>
      ))}
    </div>
  );
};
