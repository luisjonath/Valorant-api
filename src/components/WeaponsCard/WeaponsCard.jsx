import React from "react";
import { Link } from "react-router-dom";
import "./WeaponsCard.css";
import { Loading } from "../Loading/Loading";

export const WeaponsCard = ({ weaponsData }) => {
  return (
    <div className="container-card">
      {weaponsData.length === 0 ? (
        <Loading />
      ) : (
        weaponsData.map((item) => (
          <Link
            to={`/weapons/${item.uuid}`}
            key={item.uuid}
            className="text-link"
          >
            <div key={item.uuid} className="subcontainer-card">
              <img src={item.displayIcon} alt="" className="" />
              <h2>{item.displayName}</h2>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};
