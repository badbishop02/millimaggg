import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

import { urlFor } from '../utils/client';

const Landing = ({ landingBanner }) => {
  return (
    <section
    className="relative bg-[url('../img/banner/contact.jpg')] bg-center bg-no-repeat"
  >
    <div
      className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
        {landingBanner?.smallText}
  
          <strong className="block font-extrabold text-white">
            to Millimag Eatery.
          </strong>
        </h1>
  
        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        {landingBanner?.product}
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <p
            className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            To The Menu.
          </p>
  
          <p
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            About Us.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Landing