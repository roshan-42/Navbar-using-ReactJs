import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Work from "./Components/mywork/Work";
import About from "./Components/about/About";
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/mywork" element={<Work />}></Route>
      </Routes>
    </>
  );
}

export default App;
