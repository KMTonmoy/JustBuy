import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-12'>
            <div className='container mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Customer Care */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Customer Care</h3>
                        <ul className='space-y-3'>
                            <li><a href="#" className='hover:text-gray-400'>Help Center</a></li>
                            <li><a href="#" className='hover:text-gray-400'>How to place order?</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Track Order</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Return and Refund Policy</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Privacy Policy</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Replacement Policy</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Our Partners */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Our Partners</h3>
                        <ul className='space-y-3'>
                            <li><a href="#" className='hover:text-gray-400'>Delivery Tiger</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Delivery Bondhu</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Classified Site</a></li>
                            <li><a href="#" className='hover:text-gray-400'>JustBuy</a></li>
                        </ul>
                    </div>
                    {/* Earn Money with JustBuy */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Earn Money with JustBuy</h3>
                        <ul className='space-y-3'>
                            <li><a href="#" className='hover:text-gray-400'>Affiliate Program</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Become a Vendor</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Advertise with Us</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Partnership Opportunities</a></li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Contact Information</h3>
                        <ul className='space-y-3'>
                            <li><a href="#" className='hover:text-gray-400'>Our Address</a></li>
                            <li><a href="#" className='hover:text-gray-400'>JustBuy Blog</a></li>
                            <li><a href="#" className='hover:text-gray-400'>SiteMap</a></li>
                            <li><a href="#" className='hover:text-gray-400'>Suggestions And Complaints</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10 md:flex justify-between items-start gap-8'>
                    {/* Newsletter */}
                    <div className='mb-6 md:mb-0'>
                        <h3 className='text-xl font-bold mb-4'>Newsletter</h3>
                        <p className='mb-4'>Every day more than 1000 products are added on JustBuy. To get new product updates, subscribe now.</p>
                        <form className='flex flex-col md:flex-row'>
                            <input
                                type='email'
                                placeholder='E-Mail Address'
                                className='p-3 rounded mb-3 md:mb-0 md:mr-3 flex-grow'
                            />
                            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                    {/* Questions, Opinion, Complain */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Questions, Opinion, Complain</h3>
                        <p>Email: <a href='mailto:info@justbuy.com' className='text-blue-400 hover:text-blue-600'>info@justbuy.com</a></p>
                        <p>Inbox: <a href='https://www.facebook.com/justbuyofficial' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-600'>facebook.com/justbuyofficial</a></p>
                    </div>
                </div>
                <div className='mt-10 text-center border-t border-gray-700 pt-6'>
                    <p>“JustBuy Official Facebook Page Link: <a href='https://www.facebook.com/justbuyofficial' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-600'>facebook.com/justbuyofficial</a>. JustBuy is not responsible for any fraud if the product is not bought from this page.”</p>
                    <p className='mt-4'>&copy; {new Date().getFullYear()} JustBuy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
