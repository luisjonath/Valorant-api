import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharactersDetails.css";

export const CharactersDetails = () => {
  const [idCharacter, setIdCharacter] = useState([]);
  const {
    displayName,
    displayIcon,
    displayIconSmall,
    abilities,
    fullPortrait,
    description,
    role,
    background,
  } = idCharacter;

  const { uuid } = useParams();

  const apiValorant = `https://valorant-api.com/v1/agents/${uuid}`;

  //   useEffect(() => {
  //     (async function () {
  //       let data = await fetch(apiValorant).then((res) => res.json());
  //       setIdCharacter(data);
  //     });
  //   }, [apiValorant]);
  useEffect(() => {
    fetch(apiValorant)
      .then((response) => response.json())
      .then((data) => {
        setIdCharacter(data.data);
      });
  }, [apiValorant]);

  return (
    <div key={uuid} className="details-container">
      {/* <div className="details-sub-container"> */}
        <div className="detail-img-container">
          
          <div>

          <img src={fullPortrait} alt=""/>
          </div>
            
          
        </div>

        <div className="details-subcontainer">
          <div className="details-tcontainer">
            <h1>{displayName}</h1>

            <p>{description}</p>
            {role && (
              <div>
                <h2>Role:</h2>
                <p>Name: {role.displayName}</p>
                <p>Description: {role.description}</p>
              </div>
            )}
            <ul>
              <h1>Abilities:</h1>
              {abilities &&
                abilities.map((ability, index) => (
                  <div key={index} className="abilities">
                    <h3>{ability.displayName}:</h3>
                    <p>{ability.description}</p>
                  </div>
                ))}
            </ul>
          </div>
        </div>
        <div className="details-tcontainer2">
        </div>
      {/* </div> */}
    </div>
  );
};
