import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, CHARACTER } from "../../constant/route";
import Home from "../../pages/Home";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={CHARACTER} element="Home" />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
