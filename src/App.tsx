import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar";
import Models from "./pages/Models";
import Services from "./pages/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <>    
    <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models" element={<Models />} />
            <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </>

  )
}

export default App
