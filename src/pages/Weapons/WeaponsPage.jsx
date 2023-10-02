import React, { useEffect, useState } from "react";
import {WeaponsCard} from "../../components/WeaponsCard/WeaponsCard"

export const WeaponsPage = () => {
  const [weaponsData, setWeaponsData] = useState([]);
  const api = "https://valorant-api.com/v1/weapons";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setWeaponsData(data.data);
      });
  }, [api]);

  return (
    <div className="container-app">
      <WeaponsCard weaponsData={weaponsData} />
    </div>
  );
};
