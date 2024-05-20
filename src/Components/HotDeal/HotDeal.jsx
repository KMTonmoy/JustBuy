import React, { useState, useEffect } from 'react';

const HotDeal = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch('Fake.json')
            .then(response => response.json())
            .then(data => {
                setDeals(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Filter deals based on discount >= 25
    const filteredDeals = deals.filter(deal => deal.discount >= 25);

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex items-center justify-center mb-4">
                <img src="https://static.ajkerdeal.com/images/deals/flash/hot-deal-logo.gif" alt="Hot Deal" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredDeals.map((deal, index) => {
                    const discountedPrice = deal.price - (deal.price * (deal.discount / 100));
                    return (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={deal.image} alt={deal.title} className="w-full h-32 object-cover mb-4 rounded-md" />
                            <h3 className="text-lg font-semibold mb-2">{deal.title}</h3>
                            <p className="text-gray-600 mb-2">{deal.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-blue-500 font-bold">{deal.discount}% OFF</span>
                                <div className="text-right">

                                    <span className="text-gray-500 line-through mr-2">${deal.price}</span>
                                    <span className="text-gray-800 font-bold text-xl">${discountedPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HotDeal;
