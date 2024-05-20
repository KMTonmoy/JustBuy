import React, { useState, useEffect } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from API or JSON file
        fetch('Fake.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold my-8 text-center text-gray-800 border-b-2 border-gray-300 pb-4">
                All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => {
                    // Calculate discounted price
                    const discountedPrice = product.price - (product.price * (product.discount / 100));
                    return (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-gray-500 line-through mr-2">${product.price.toFixed(2)}</span>
                                        <span className="text-gray-800 font-bold text-xl">${discountedPrice.toFixed(2)}</span>
                                    </div>
                                    <span className="text-blue-500 font-bold">{product.discount}% OFF</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllProducts;
