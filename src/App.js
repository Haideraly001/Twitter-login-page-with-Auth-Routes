import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./component/SignIn"
import Home from "./Home"
import SignUp from "./component/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-In" element={<SignIn />} />
          <Route path="/sign-Up" element={<SignUp />} />
          {/* <Route path="/Forget-pass" element={<ForgetPass />} /> */}
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
