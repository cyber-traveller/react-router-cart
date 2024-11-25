import React from "react";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
function HomePage({ addTOCart, products }) {
  const [indexProduct, setIndexProduct] = useState([17, 16, 15, 18]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    handleFeaturedProducts();
  }, [products]);
  function handleFeaturedProducts() {
    const filterProduct = products.filter((product) => {
      return indexProduct.includes(product.id);
    });
    setFeaturedProducts(filterProduct);
  }
  return (
    <div>
      <section>
        <img src={banner} alt="banner" />
      </section>
      {/* featured products */}
      <section>
        <div>
          <div className="flex px-3 justify-between items-center border-b border-black">
          <h1 className="text-xl md:text-3xl font-bold text-start  md:p-2 border-black">
            Featured Products
          </h1>
          <Link to={"/products"}><p className="text-lg hover:underline cursor-pointer">View all</p></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 min-h-screen bg-gray-100 p-3 md:p-20">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  addTOCart={addTOCart}
                  addedToCart={product.addedToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
