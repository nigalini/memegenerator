import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meme from "./components/Meme";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Meme />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;