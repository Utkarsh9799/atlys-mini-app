import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "./modules/404";
import Home from "./modules/Home";
import Login from "./modules/Login";

function App() {
  return (
    <div className="min-h-screen w-screen bg-[#131319]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
