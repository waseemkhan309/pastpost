import React, { useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import both icons
import logoImg from '../../Assets/pastpostlogo.png'
import Button from '../Button/Button';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [dropdown, setDropdown] = useState({
        services: false,
        resources: false,
    });

    const toggleServicesDropdown = () => {
        setDropdown({ services: !dropdown.services, resources: false });
    };
    const toggleResourcesDropdown = () => {
        setDropdown({ services: false, resources: !dropdown.resources });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            console.log('scrollTop: ' + scrollTop)
            setIsSticky(scrollTop > 50); // Adjust 200 to the desired scroll position
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`bg-white shadow-md p-4 px-20 flex justify-between items-center sticky top-0 ${isSticky ? "shadow-lg" : ""}`}>
            {/* Left Section - Logo */}
            <div className='flex gap-28'>
                <div className="flex items-center space-x-2">
                    <img
                        src={logoImg}
                        alt="Past Post Logo"
                        className={`transition-all duration-300 ease-in-out ${isSticky ? "w-44" : "w-36"}`}
                    />
                </div>

                {/* Center Section - Navigation Links */}
                {/* <nav className="hidden md:flex space-x-6 relative">
                    
                    <div className=" ">
                        <button
                            onClick={toggleServicesDropdown}
                            className="text-gray-700 hover:text-blue-900 focus:outline-none flex items-center"
                        >
                            Services
                            {dropdown.services ? (
                                <FaCaretUp className="ml-1" />
                            ) : (
                                <FaCaretDown className="ml-1" />
                            )}
                        </button>
                        
                        {dropdown.services && (
                            <div className="w-[50vw] absolute top-full mt-2 flex justify-between py-4 px-2 bg-white shadow-lg border rounded-md">
                                <div>
                                    <h1>Posthumous Messages</h1>
                                    <h1>Estate Planning</h1>
                                    <h1>Pets</h1>
                                </div>
                                <div>
                                    <h1>Dependents</h1>
                                    <h1>Funeral Wills</h1>
                                </div>
                                <div>
                                    <h1>Companies</h1>
                                    <h1>We have volume discounts.<br /><span> How can we help you?</span></h1>
                                    <Button text={"Quete"} />
                                </div>
                            </div>
                        )}
                    </div>

            
                    <div className="relative">
                        <button
                            onClick={toggleResourcesDropdown}
                            className="text-gray-700 hover:text-blue-900 focus:outline-none flex items-center"
                        >
                            Resources
                            {dropdown.resources ? (
                                <FaCaretUp className="ml-1" />
                            ) : (
                                <FaCaretDown className="ml-1" />
                            )}
                        </button>
                
                        {dropdown.resources && (
                            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg border rounded-md">
                                <a href="#resource1" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Resource 1</a>
                                <a href="#resource2" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Resource 2</a>
                            </div>
                        )}
                    </div>

                    
                    <a href="#prices" className="text-gray-700 hover:text-blue-900">Prices</a>
                </nav> */}
            </div>
            {/* Right Section - Button */}
            {/* <Button
                text={"Companies"}
            /> */}
        </header>
    );
};

export default Header;
