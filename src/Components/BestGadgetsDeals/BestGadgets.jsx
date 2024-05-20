import React, { useState, useEffect } from 'react';

const BestGadgets = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('Fake.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setVisibleProducts(data.filter(product => product.category === 'electronics').slice(0, 8)); // Initially display 8 products
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const loadMore = () => {
        const newVisibleProducts = products.filter(product => product.category === 'electronics').slice(0, visibleProducts.length + 8);
        setVisibleProducts(newVisibleProducts);
        if (newVisibleProducts.length >= products.filter(product => product.category === 'electronics').length) {
            setShowAll(true);
        }
    };

    const showLess = () => {
        setVisibleProducts(products.filter(product => product.category === 'electronics').slice(0, 8));
        setShowAll(false);
    };

    return (
        <div className="py-10">
            <img src="https://static.ajkerdeal.com/images/desktop-home/gadgets.svg" className="w-[250px] mx-auto mb-10" alt="Best Gadgets" />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                    {!showAll && visibleProducts.length < products.filter(product => product.category === 'electronics').length && (
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
    );
};

export default BestGadgets;
