import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart';


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavMenu from './components/NavMenu';

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
      <p>Footer</p>

    </Router >
  );
}

export default App;
