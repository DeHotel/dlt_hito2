import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <Navbar carrito={carrito} total={total} />
      {/* <Home
        carrito={carrito}
        setCarrito={setCarrito}
        setTotal={setTotal}
        total={total}
      /> */}
      {/* <Register /> */}
      <Login />
      <Footer />
    </>
  );
}

export default App;
