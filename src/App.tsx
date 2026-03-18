import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar";
import Models from "./pages/Models";
import About from "./pages/About";


function App() {
  return (
    <>    
    <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models" element={<Models />} />
            <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    </>

  )
}

export default App
