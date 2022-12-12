import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const navbar = [
  {
    element: <Home />,
    title: "Home",
    path: "/home",
    hidden: false,
  },
  {
    element: <About />,
    title: "About",
    path: "/about",
    hidden: false,
  },
  {
    element: <h1>Category</h1>,
    title: "Category",
    path: "/category",
    hidden: true,
  },
  {
    element: <h1>Recipe</h1>,
    title: "Recipe",
    path: "/recipe",
    hidden: true,
  },
  {
    element: <Contact />,
    title: "Contact",
    path: "/contact",
    hidden: false,
  },
];
