import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Bookings } from "./pages/Bookings"
import { Blog } from "./pages/Blog"
import { Footer } from "./components/Footer"
import { Contact } from "./pages/Contact"
import '../src/App.css'
import { Menu } from "./pages/Menu"
import { MenuDetail } from "./pages/MenuDetail"

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/RestaurantApp/" element={<Home />} />
      <Route path="/RestaurantApp/menu" element={<Menu />} />
      <Route path="/RestaurantApp/menu/:id" element={<MenuDetail />} />
      <Route path="/RestaurantApp/bookings" element={<Bookings />} />
      <Route path="/RestaurantApp/contact" element={<Contact />} />
      <Route path="/RestaurantApp/blog" element={<Blog />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App