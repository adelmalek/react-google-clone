import './App.css';

import { useState } from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme? "dark" : ""}>
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
