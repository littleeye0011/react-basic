import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import Member from "./components/page/Member";
import Product from "./components/page/product";
import Contract from "./components/page/Contract";

import "./Appdata.css";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/menber" element={<Member />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
