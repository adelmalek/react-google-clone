import './App.css';

import { useState } from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import RoutEs from "./Components/RoutEs";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme? "dark" : ""}>
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <RoutEs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
