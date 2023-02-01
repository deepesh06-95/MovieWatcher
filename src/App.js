import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/home";
import { MovieList } from "./components/movieList/movieList";
import { Movie } from "./pages/movieDetail/movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="movieWatcher" element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route
            path="/*"
            element={
              <div
                style={{
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  marginTop: "2rem",
                }}
              >
                Page Not Found{" "}
                <Link
                  to="/movieWatcher"
                  style={{ textDecoration: "underline", color: "red" }}
                >
                  Click here
                </Link>{" "}
                for Homepage
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
