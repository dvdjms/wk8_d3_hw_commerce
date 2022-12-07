import React, {useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Commerce from './components/Commerce'
import Basket from './components/Basket'

const App = () => {

  let shopItems = [
    {product: "Coke", price: 1.20},
    {product: "Coffee", price: 3.30},
    {product: "Tea", price: 3.00}
  ]
  
  // eslint-disable-next-line
  const [products, setProducts] = useState(shopItems);
  
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Commerce products={products}/>}/>
            <Route path="/basket" element={<Basket products={products}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
