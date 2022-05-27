import { useSelector } from "react-redux";
import HomeCard from "../../components/HomeCard";
import "./home.css";
import Loading from "../../components/Loading";

function Home() {
  const characters = useSelector((state) => state.characterData);
  return (
    <Loading>
      <div className="home-container">
        {characters.results &&
          characters.results.map((character) => (
            <HomeCard character={character} key={character.id} />
          ))}
      </div>
    </Loading>
  );
}

export default Home;
