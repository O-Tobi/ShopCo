import Layout from "./components/Layouts/Layout";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="product-details" element={<ProductDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
