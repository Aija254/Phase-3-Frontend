import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MovieList from "./components/MovieList";
import CreateMovie from "./components/CreateMovie";
import AllMoviesList from "./components/AllMoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/movies" element={<MovieList />} />
          <Route exact path="/create" element={<CreateMovie />} />
          <Route exact path="/all" element={<AllMoviesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;