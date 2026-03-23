import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar";
import Models from "./pages/Models";
import About from "./pages/About";
import Footer from "./components/Footer";
import Success from "./pages/Success"
import Quote from "./pages/Quote";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>  
    <ScrollToTop />
    <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models" element={<Models />} />
      <Route path="/services" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/success" element={<Success />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </>

  )
}

export default App
