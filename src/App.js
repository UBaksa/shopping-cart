import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
