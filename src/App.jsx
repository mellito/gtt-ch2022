import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allCharacters } from "./Home/Application/slice";

function App() {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(allCharacters());
  }, []);
  return (
    <div className="App">
      <p>hola</p>
    </div>
  );
}

export default App;
