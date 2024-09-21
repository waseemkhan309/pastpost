import React from 'react';
import Header from '../Components/Header/Header';
import appStoreImg from '../Assets/GoogleStore_bco.png';
import playStoreImg from '../Assets/AppStore_bco.png';
import mobileImg from '../Assets/app_home.webp';
import mobilewithapp from '../Assets/mobile_with_app.webp';
import { FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'; // Icons for social media
import logoImg from '../Assets/PastPostLogoBlanco.webp'; // Replace with your actual logo


const HomePage = () => {
    return (
        <>
            <Header />
            <div className="bg-yellow-50 min-h-screen flex flex-col justify-center items-center">
                {/* Main Content Container */}
                <div className="py-40 md:py-0 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-10 px-4 lg:px-8">

                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 ">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Welcome to the PastPost Family,{" "}
                            <span className="text-yellow-500">Alejandro!</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 mb-6">
                            We’re thrilled to have you join our community dedicated to preserving memories and securing your digital legacy.<br /> Here’s what’s waiting for you:
                        </p>

                        {/* App Store and Google Play Buttons */}
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Link to='/' target="_blank" rel="noreferrer">
                                <img src={appStoreImg} alt="Download on App Store" className="h-12" />
                            </Link>
                            <Link to='/' target="_blank" rel="noreferrer">
                                <img src={playStoreImg} alt="Download on Google Play" className="h-12" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={mobileImg}
                            alt="Past Post App on Mobile"
                            className="w-64 lg:w-80 object-cover"
                        />
                    </div>
                </div>
            </div>
            <section className="bg-white px-4 lg:px-8 py-24 md:py-40">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Unlock Premium Insurance
                    </h2>

                    {/* Description */}
                    <p className="text-lg lg:text-xl text-gray-600 mb-8">
                        Your legacy deserves the best protection. With our premium insurance plan, you can ensure that your assets, property, and personal wishes are secured for the future.
                    </p>

                    {/* Call to Action Button */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </section>
            <section className="bg-gray-50 py-24 md:py-40 px-4 lg:px-8 flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src={mobilewithapp}
                        alt="Past Post App on Mobile"
                        className="w-60 lg:w-64 object-cover"
                    />
                </div>
                <div className="max-w-4xl py-40 mx-auto lg:text-left">
                    {/* Heading */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        What’s Next?
                    </h2>

                    {/* List of Steps */}
                    <ul className="text-lg text-gray-700 space-y-4">
                        <li>
                            <span className="font-semibold text-blue-500">•</span> Scan your NFC tag to quickly access your account.
                        </li>
                        <li>
                            <span className="font-semibold text-blue-500">•</span> Download the PastPost app to start setting up your legacy.
                        </li>
                        <li>
                            <span className="font-semibold text-blue-500">•</span> Enjoy exclusive features with premium insurance that gives you peace of mind.
                        </li>
                    </ul>
                    {/* App Store and Google Play Buttons */}
                    <div className="flex justify-start space-x-4 mt-10">
                        <Link to='/' target="_blank" rel="noreferrer">
                            <img src={appStoreImg} alt="Download on App Store" className="h-12" />
                        </Link>
                        <Link to='/' target="_blank" rel="noreferrer">
                            <img src={playStoreImg} alt="Download on Google Play" className="h-12" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-40 bg-gradient-to-r from-blue-400 to-blue-600  px-4 lg:px-8 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 ">
                        Your Future, Your Way – Welcome Aboard!
                    </h1>
                    {/* Subheading */}
                    <p className="text-lg lg:text-xl text-blue-100 mb-8">
                        We’re excited to have you with us as you take control of your future. Let’s begin your journey to securing a legacy, just the way you want it!
                    </p>

                    {/* Call to Action Button */}
                    <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                        Get Started Now
                    </button>
                </div>
            </section>
            <section className="bg-blue-50 py-24 md:py-40 px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        We’re here to guide you through every step of the way.
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 mb-8">
                        If you have any questions, feel free to reach out to our support team or explore our FAQ.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6">
                        {/* Support Button */}
                        <Link
                            to="/support"
                            className="bg-blue-500 text-white flex items-center justify-center px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        >
                            <FaPhoneAlt className="mr-2" /> Contact Support
                        </Link>

                        {/* FAQ Button */}
                        <Link
                            to="/faq"
                            className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
                        >
                            <FaQuestionCircle className="mr-2" /> Explore FAQ
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="bg-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Logo and Tagline */}
                        <div>
                            <img src={logoImg} alt="Past Post Logo" className="w-40 h-12 mb-4 object-contain" />
                            <p className="text-gray-300">
                                Plan your digital legacy so your loved ones will remember you forever.
                            </p>
                        </div>

                        {/* Services Section */}
                        <div>
                            <h3 className="text-white font-bold mb-4">SERVICES</h3>
                            <ul>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Aid</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Blog</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Help Center</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Report Death</Link></li>
                            </ul>
                        </div>

                        {/* Posthumous Services Section */}
                        <div>
                            <h3 className="text-white font-bold mb-4">SERVICES</h3>
                            <ul>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Posthumous Messages</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Heritage List</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Funeral Wishes</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Dependents</Link></li>
                            </ul>
                        </div>

                        {/* Resources Section */}
                        <div>
                            <h3 className="text-white font-bold mb-4">RESOURCES</h3>
                            <ul>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Pets</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Companies</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">MAPFRE Coverages</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media and Legal Section */}
                    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center">
                        {/* Social Media Icons */}
                        <div className="flex space-x-6">
                            <Link href="https://linkedin.com" className="text-gray-300 hover:text-white">
                                <FaLinkedin size={24} />
                            </Link>
                            <Link href="https://instagram.com" className="text-gray-300 hover:text-white">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="https://facebook.com" className="text-gray-300 hover:text-white">
                                <FaFacebook size={24} />
                            </Link>
                            <Link href="https://tiktok.com" className="text-gray-300 hover:text-white">
                                <FaTiktok size={24} />
                            </Link>
                            <Link href="https://twitter.com" className="text-gray-300 hover:text-white">
                                <FaTwitter size={24} />
                            </Link>
                        </div>
                        {/* Copyright and Links */}
                        <div className="text-gray-300 mt-4 lg:mt-0">
                            <p className="text-center lg:text-left">
                                Copyright © 2024 J4PP SA de CV
                            </p>
                            <div className="text-center lg:text-left space-x-4">
                                <Link href="#" className="hover:text-white">Terms and Conditions</Link>
                                <span>•</span>
                                <Link href="#" className="hover:text-white">Privacy</Link>
                                <span>•</span>
                                <Link href="#" className="hover:text-white">Request for Rights</Link>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="text-gray-300 mt-4 lg:mt-0">
                            <p>Mexico</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default HomePage