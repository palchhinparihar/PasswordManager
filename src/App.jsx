import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Components
import About from "./componets/About";
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
