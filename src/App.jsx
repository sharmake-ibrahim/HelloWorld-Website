import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conponents/Home";
import SharedLayout from "./conponents/SharedLayout";
import Product from "./conponents/Product";
import Error from "./conponents/Error";
import About from "./conponents/About";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
