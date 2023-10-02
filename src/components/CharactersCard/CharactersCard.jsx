import React, { useEffect, useState } from 'react'
import "./CharactersCard.css"
import { Link } from 'react-router-dom'
import { Loading } from '../Loading/Loading';

export const CharactersCard = () => {

    const [vCharacter, setVCharacter] = useState([]);
  
  
  
  
  
 
  const apiValorant = `https://valorant-api.com/v1/agents/?`;
  
     useEffect(() => {
      fetch(apiValorant)
      .then((response) => response.json())
      .then((data) => {
        setVCharacter(data.data);
        
      });
      
  }, []);

  const filteredCharacters = vCharacter.filter((item) => item.isPlayableCharacter);
    
  return (
    <div className='container-card'>
        

        {filteredCharacters.length === 0 ?
        <Loading/>
    :filteredCharacters.map((item) => (
      <Link to={`/character/${item.uuid}`} key={item.uuid} className='characterLink'>
        <div key={item.uuid} className='subcontainer-card'>
          <img src={item.displayIcon} alt="" />
          <h2>{item.displayName}</h2>
        </div>
      </Link>
    ))
  }
            
    </div>
  )
}
