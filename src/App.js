import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Films } from "./components/Films/Films";
import FilmVehicles from "./components/FilmVehicles/FilmVehicles";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route exact path="/film/:id/vehicles" element={<FilmVehicles />} />
        </Route>
      </Routes>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
