import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRouter from "./components/MainRouter";
import { Add, loadingState } from "./Store/actions";
import { getAddCharacters } from "./services/character";
import "./app.css";

function App() {
  const urlid = useSelector((state) => state.url);
  const dispach = useDispatch();
  const AddCharacters = async () => {
    const characters = await getAddCharacters(urlid);
    setTimeout(() => {
      dispach(Add(characters));
    }, 3000);
  };
  useEffect(() => {
    AddCharacters();
    dispach(loadingState(false));
  }, [urlid]);
  return <MainRouter />;
}

export default App;
