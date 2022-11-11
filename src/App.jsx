import "./index.scss";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import SharedLayout from "./pages/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<Home/>}/>
          <Route path="marketplace" element={<Marketplace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
