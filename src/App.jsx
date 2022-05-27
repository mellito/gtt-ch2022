import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainRouter from "./components/MainRouter";
import { Add } from "./Store/actions";
import getAddCharacters from "./services/character";

function App() {
  const dispach = useDispatch();
  const AddCharacters = async () => {
    const characters = await getAddCharacters();
    setTimeout(() => {
      dispach(Add(characters));
    }, 3000);
  };
  useEffect(() => {
    AddCharacters();
  }, []);
  return <MainRouter />;
}

export default App;
