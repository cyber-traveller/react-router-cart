import "./App.css";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartProduct, setCartProduct] = useState([]); // cart state variable
  const [products, setProducts] = useState([]); //actual api data state variable
  const [data, setData] = useState({ totalQuantity: 0, totalPrice: 0 }); // other data state variable

  /// fetch the data from the api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const manualData = json.map((product) => ({
          ...product,
          addedToCart: false,
        }));
        setProducts(manualData);
      });
  }, []);
  // calculate the total quantity and total price of the cart
  useEffect(() => {
    setData({
      totalQuantity: cartProduct.reduce(
        (acc, product) => acc + product.quantity,
        0
      ),
      totalPrice: cartProduct.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
    });
  }, [cartProduct]);

  // addTOCart can be used to add or delete the item from the cart
  function addTOCart(id) {
    if (cartProduct.find((product) => product.id === id)) {
      setCartProduct(cartProduct.filter((product) => product.id !== id));
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, addedToCart: false } : product
        )
      );
      return;
    }
    // modifing the addedToCart property of the product to true  or false in the products array
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, addedToCart: !product.addedToCart }
          : product
      )
    );

    //modify the cartProduct array to have quantity and subTotal property
    let item = products.find((product) => product.id === id);
    const updatedCartProducts = [
      ...cartProduct,
      {
        ...item,
        quantity: 1,
        subTotal: item.price,
      },
    ];
    // finally update the cartProduct array
    setCartProduct(updatedCartProducts);
  }

  return (
    <BrowserRouter>
      <NavBar data={data} />
      <Routes>
        <Route
          path="/"
          element={<HomePage addTOCart={addTOCart} products={products} />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/products"
          element={<ProductPage addTOCart={addTOCart} products={products} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              addTOCart={addTOCart}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              data={data}
              setData={setData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
