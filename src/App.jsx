import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Bookings } from "./pages/Bookings"
import { Blog } from "./pages/Blog"
import { Footer } from "./components/Footer"
import { Contact } from "./pages/Contact"
import '../src/App.css'
import CatalogoPlatos from "./components/CatalogoPlatos"
import PaginaPlatoIndividual from "./components/Platoindividualcomp"

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/react-app/" element={<Home />} />
      <Route path="/react-app/services" element={<CatalogoPlatos />} />
      <Route path="/react-app//services/:id" element={<PaginaPlatoIndividual />} />
      <Route path="/react-app/bookings" element={<Bookings />} />
      <Route path="/react-app/contact" element={<Contact />} />
      <Route path="/react-app/blog" element={<Blog />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App