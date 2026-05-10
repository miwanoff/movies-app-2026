import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import MovieDetail from "./components/MovieDetail";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <h1>Movies</h1>
        <Routes>
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
