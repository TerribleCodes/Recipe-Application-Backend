import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateRecipe } from "./pages/create-recipe";
import { SavedRecipe } from "./pages/saved-recipe";
import { Auth } from "./pages/auth";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/create-recipe" element={<CreateRecipe />}></Route>
          <Route path="/saved-recipe" element={<SavedRecipe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
