import React from "react";
import ProductCard from "../components/ProductCard";

function ProductPage({ addTOCart, products }) {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Products
          </h1>
          <p className="text-gray-600 mt-2">
            Browse through our extensive collection of quality products.
          </p>
        </header>
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
    </div>
  );
}

export default ProductPage;
