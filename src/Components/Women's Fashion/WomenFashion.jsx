import React, { useState, useEffect } from 'react';

const WomenFashion = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/alldata')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setVisibleProducts(data.filter(product => product.category === "women's fashion").slice(0, 6));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const womenFashionProducts = products.filter(product => product.category === "women's fashion");

    const loadMore = () => {
        const currentLength = visibleProducts.length;
        const isMore = currentLength < womenFashionProducts.length;
        const nextResults = isMore
            ? womenFashionProducts.slice(currentLength, currentLength + 6)
            : [];
        setVisibleProducts([...visibleProducts, ...nextResults]);
        setShowAll(currentLength + nextResults.length >= womenFashionProducts.length);
    };

    const showLess = () => {
        setVisibleProducts(womenFashionProducts.slice(0, 6));
        setShowAll(false);
    };

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
                            {visibleProducts.map((product, index) => {
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

                        <div className="flex justify-center mt-4">
                            {!showAll && visibleProducts.length < womenFashionProducts.length && (
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
                </div>
            )}
        </>
    );
};

export default WomenFashion;
