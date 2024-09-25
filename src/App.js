import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./component/SignIn"
import Home from "./Home"
import SignUp from "./component/SignUp";
import Bgcolor from "./component/Bgcolor";
import ShopingList from "./component/ShopingList";
import Useeffect from "./component/Useeffect";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-In" element={<SignIn />} />
          <Route path="/sign-Up" element={<SignUp />} />
          <Route path="/Bg-color" element={<Bgcolor />} />
          <Route path="/Shoping-List" element={<ShopingList />} />
          <Route path="/Effect-path" element={<Useeffect />} />

        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
