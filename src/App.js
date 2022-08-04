import './App.css';

import { useState } from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme? "dark" : " "}>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
