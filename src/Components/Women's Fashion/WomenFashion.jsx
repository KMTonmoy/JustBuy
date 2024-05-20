import React, { useState, useEffect } from 'react';

const WomenFashion = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('Fake.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const womenFashionProducts = products.filter(product => product.category === "women's fashion");

    return (
        <>
            {womenFashionProducts.length === 0 ? (
                null
            ) : (
                <div className="py-10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold my-8 text-center text-gray-800 border-b-2 border-gray-300 pb-4">
                            Women's Fashion
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {womenFashionProducts.map((product, index) => {
                                const discountedPrice = product.price - (product.price * (product.discount / 100));
                                return (
                                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-t-md" />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                            <p className="text-gray-600 mb-4">{product.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-blue-500 font-bold">{product.discount}% OFF</span>
                                                <div className="text-right">
                                                    <span className="text-gray-500 line-through mr-2">${product.price.toFixed(2)}</span>
                                                    <span className="text-gray-800 font-bold text-xl">${discountedPrice.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WomenFashion;
