import Foooter from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Foooter />
    </>
  );
}

export default App;
