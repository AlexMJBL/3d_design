import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar";


function App() {
  return (
    <>    
    <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    </>

  )
}

export default App
