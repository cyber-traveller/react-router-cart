function ProductCard({
  id,
  title,
  price,
  image,
  description,
  addTOCart,
  addedToCart,
}) {
  return (
    <div
      key={id}
      className="text-left flex flex-col border-b rounded-lg border-gray-300 transition-all hover:bg-gray-100 hover:shadow-lg hover:scale-[102%] duration-300"
    >
      <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-[380px] md:h-[480px] w-full max-w-xs mx-auto">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-60 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <button className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full hover:bg-red-300 focus:outline-none">
            <span className="material-icons text-gray-600 group-hover:text-red-600">
              favorite
            </span>
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4 flex flex-col h-full justify-between">
          <div>
            <h2 className="text-sm md:text-lg font-semibold text-gray-800 truncate">
              {title}
            </h2>
            <p className="text-gray-500 mt-1 text-xs md:text-sm truncate">
              {description}
            </p>
          </div>
          <div className="mt-3">
            <span className="text-lg md:text-2xl font-bold text-blue-600">
              ${price.toFixed(2)}
            </span>
          </div>
          <div className="mt-4">
            {addedToCart ? (
              <button
                onClick={() => addTOCart(id)}
                className="w-full py-2 px-4 bg-red-600 text-white text-sm md:text-base font-medium rounded-md shadow-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center"
              >
                <span className="material-icons md:mr-2">remove_shopping_cart</span>
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addTOCart(id)}
                className="w-full py-2 px-4 bg-blue-600 text-white text-sm md:text-base font-medium rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
              >
                <span className="material-icons md:mr-2">add_shopping_cart</span>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
