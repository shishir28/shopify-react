import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <p>Navigation</p>
      <Routes>
        <Route path="/products/:handle" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <p>Footer</p>

    </Router >
  );
}

export default App;
