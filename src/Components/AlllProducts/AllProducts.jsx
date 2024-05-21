import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
    const response = await fetch('http://localhost:5000/alldata');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const AllProducts = () => {
    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    const [visibleProducts, setVisibleProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (products.length > 0) {
            setVisibleProducts(products.slice(0, 12)); // Initially display 12 products
        }
    }, [products]);

    const loadMore = () => {
        const newVisibleProducts = products.slice(0, visibleProducts.length + 4);
        setVisibleProducts(newVisibleProducts);
        if (newVisibleProducts.length >= products.length) {
            setShowAll(true);
        }
    };

    const showLess = () => {
        setVisibleProducts(products.slice(0, 12));
        setShowAll(false);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold my-8 text-center text-gray-800 border-b-2 border-gray-300 pb-4">
                All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visibleProducts.map((product, index) => {
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
            <div className="flex justify-center mt-4">
                {!showAll && visibleProducts.length < products.length && (
                    <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Show More
                    </button>
                )}
                {showAll && (
                    <button onClick={showLess} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
