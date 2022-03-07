import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart';


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Cart />
      <NavMenu />

      <Routes>
        <Route path="/products/:handle" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

    </Router >
  );
}

export default App;
