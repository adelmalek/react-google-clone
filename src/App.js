import './App.css';

import { useState } from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme? "dark" : ""}>
      <div className="bg-slate-200 dark:bg-slate-900 dark:text-slate-200 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
