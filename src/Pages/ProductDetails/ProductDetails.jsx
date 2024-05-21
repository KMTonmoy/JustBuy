import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();

    // Ensure product data is available before rendering
    if (!product) {
        return <div>Loading...</div>;
    }

    const discountedPrice = product.price - (product.price * (product.discount / 100));

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
                <div className="md:w-1/2 bg-gray-200 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 p-6 bg-white">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                        <span className="text-gray-500 line-through mr-2">${product.price.toFixed(2)}</span>
                        <span className="text-green-600 font-bold text-2xl">${discountedPrice.toFixed(2)}</span>
                        <span className="text-blue-500 font-bold ml-4">{product.discount}% OFF</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-105">
                            Add to Cart
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                            Buy Now
                        </button>
                    </div>
                    <div className="text-gray-800">
                        <h2 className="text-2xl font-bold mb-2">Product Details</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><span className="font-semibold">Brand:</span> {product.brand ? product.brand : 'None'}</li>
                            <li><span className="font-semibold">Category:</span> {product.category}</li>
                            <li><span className="font-semibold">Availability:</span> {product.availability ? 'In Stock' : 'Out of Stock'}</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
