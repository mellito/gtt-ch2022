import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, CHARACTER } from "../../constant/route";
import Home from "../../pages/Home";
import NavBar from "../NavBar";
import Character from "../../pages/Character";

function MainRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={`${CHARACTER}/:id`} element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
