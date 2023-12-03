import "./mainpage.css";
import "./returnpage.css";
import Mainpage from "./mainpage";
import Returnpage from "./returnpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Mainpage />}></Route>
          <Route exact path="/mainpage" element={<Mainpage />}></Route>
          <Route exact path="/returnpage" element={<Returnpage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
