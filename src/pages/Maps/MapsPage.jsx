import React, { useEffect, useState } from 'react'
import { MapsCard } from "../../components/MapsCard/MapsCard"
import "./MapsPage.css"

export const MapsPage = () => {
    const [infoMaps, setInfoMaps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    let mapsApi = "https://valorant-api.com/v1/maps"

    useEffect(() => {
        // fetch(mapsApi)
        // .then((response) => response.json())
        // .then((data) => {
        //   setInfoMaps(data.data);
          
        // });
        // (async function () {
        //   let data = await fetch(mapsApi)
        //   .then((res) => res.json());
        //   setInfoMaps(data.data);
        // })();

        setLoading(true)
        fetch(mapsApi)
        .then((response) => response.json())
        .then((data) => setInfoMaps(data.data))
        
        
    }, [mapsApi]);
    

  return (
    <div className='container-app'>
        {/* <h1>Valorant Api</h1> */}
        <div>

      <div className="container-items">
        <MapsCard infoMaps={infoMaps} />
      </div>
        </div>
    </div>
  )
}
