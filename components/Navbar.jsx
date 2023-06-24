import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useRouter } from 'next/router';
import millimag from "../img/logo/mm.png";

import Cart from "./Cart";
import { UStateContext } from "../context/StateContext";

import {
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
    ShieldCheckIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline";

const Navbar = () => {
      const { showCart, setShowCart, totalQuantities } = UStateContext();
      const [isOpen, setIsOpen] = useState(false);
      const user = false;
      const [searchValue, setSearchValue] = useState('');
      const router = useRouter();
      
      const handleSearch = (e) => {
         e.preventDefault();
         
         if(searchValue) {
           router.push(`/search/${searchValue}`);
         }
       };     

      return (
        <div>
          <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  <Image 
                    src={ millimag }
                    alt="user image"
                    className="cursor-pointer rounded-full"
                    width={65}
                    height={65}
                  />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/">
                      <p
                        className=" hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        🏠 Home.
                      </p>
                    </Link>
                    <Link href="/About">
                      <p
                        className=" hover:bg-orange-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        ( ͡❛ ͜ʖ ͡❛) About Us.
                      </p>
                    </Link>
                    <Link href="/Reservations">
                      <p
                        className="text-black hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        📖 Reservations.
                      </p>
                    </Link>
                    <Link href="/Contact">
                      <p
                        className="text-black hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        ☏ Contacts.
                      </p>
                    </Link>
                    <Link href="/Gallery">
                      <p
                        className="text-black hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                       🖼️ Gallery.
                      </p>
                    </Link>

                     <Link href="/Events">
                      <p
                        className="text-black hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                       📝 Events.
                      </p>
                    </Link>                     

                      <div className="flex items-center">
                      <div className="flex space-x-1">
                       <input
                          type="text"
                          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Search..."
                        />
                        <button className="px-4 text-white bg-orange-500 rounded-full ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    
                  <button className="cursor-pointer pl-9 pt-2" onClick={() => setShowCart(true)}>
                    <ShoppingBagIcon className="cart-icon" />
                   <span className="cart-item-qty">{totalQuantities}</span>
                  </button>
                    </div>
                    {showCart && <Cart />}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <div className="flex items-center">
                      <div className="flex mr-5 space-x-1">
                       <input
                          type="text"
                          className="block w-full px-4 py-2 text-orange-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Search..."
                        />
                        <button className="px-4 text-white bg-orange-600 rounded-full ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
                  <button className="cursor-pointer mr-5" onClick={() => setShowCart(true)}>
                    <ShoppingBagIcon className="cart-icon" />
                   <span className="cart-item-qty">{totalQuantities}</span>
                   {showCart && <Cart />}
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
    
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/">
                    <p
                      className="hover:bg-orange-600 text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                      🏠 Home.
                    </p>
                    </Link>
                    <Link href="/Contact">
                    <p
                      className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      ☏ Contacts.
                    </p>
                    </Link>
                    <Link href="/About">
                    <p
                      className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      ( ͡❛ ͜ʖ ͡❛) About Us.
                    </p>
                    </Link>
                    <Link href="/Reservations">
                    <p
                      className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      📖 Reservations.
                    </p>
                    </Link>
                    <Link href="/Gallery">
                    <p 
                      className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      🖼️ Gallery.
                    </p>
                    </Link>
                    <Link href="/Events">
                      <p
                        className="text-black hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                       📝 Events.
                      </p>
                    </Link>
                    <Link href="/Menu">
                    <p
                      className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                     ⋯ Menu.
                    </p>
                    </Link>
                  </div>
                </div>
              )}
            </Transition>
          </nav>
        </div>
      )
};

export default Navbar;