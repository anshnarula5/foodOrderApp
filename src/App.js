import "./App.css"
import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
function App() {
  const [cart, setCart] = useState(false)
  const showCartHandler = () => {
    setCart(true)
  }
  const hideCartHandler = () => {
    setCart(false)
  }
  return (
    <CartProvider>
      {cart && <Cart onCancel={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
