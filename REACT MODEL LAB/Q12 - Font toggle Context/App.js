import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";
import { FontProvider } from "./components/FontContext";
import "./App.css";
function App() {
  return (
    <FontProvider>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </FontProvider>
  );
}
export default App;
