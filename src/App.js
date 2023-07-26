import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [hide, setHide] = useState(false);
  const hideHandler = () => {
    setHide(!hide);
  };
  return (
    <CartProvider>
      {hide === true && <Cart onHide={hideHandler} />}
      <Header onShow={hideHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
