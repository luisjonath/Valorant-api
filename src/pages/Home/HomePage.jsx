
import {CharactersCard} from "../../components/CharactersCard/CharactersCard"
import "./HomePage.css"

function HomePage() {
  
  

  return (
    <div className="container-app">
      <h1>Valorant Api</h1>
      <div className="container-items">
        <CharactersCard />
      </div>
    </div>
  );
}

export default HomePage;
