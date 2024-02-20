import React from "react";
import Image1 from '../../assests/images/home.png'

const Banner = () => {
  return (
    <div>
      <img src={Image1} />
    </div>
    // <div className="max-w-2xl mx-auto border">

    //   <div id="default-carousel" className="relative" data-carousel="static">
    //     {/* <!-- Carousel wrapper --> */}
    //     <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
    //       {/* <!-- Item 1 --> */}
    //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
    //         <img src={Image1} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="Lokesh" />
    //       </div>
    //       {/* <!-- Item 2 --> */}
    //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <img src={Image2} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
    //       </div>
    //       {/* <!-- Item 3 --> */}
    //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <img src={Image3} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
    //       </div>
    //     </div>
    //     {/* <!-- Slider indicators --> */}
    //     <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
    //       <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //       <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //       <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //     </div>
    //     {/* <!-- Slider controls --> */}
    //     <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
    //       <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //         <svg className="w-5 h-5 text-red-400 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    //         <span className="hidden">Previous</span>
    //       </span>
    //     </button>
    //     <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
    //       <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //         <svg className="w-5 h-5 text-red-400 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    //         <span className="hidden">Next</span>
    //       </span>
    //     </button>
    //   </div>

    //   <p className="mt-5">This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
    //     more
    //     by going to the official <a className="text-blue-600 hover:underline"
    //       href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
    //   </p>
    //   <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    // </div>
    // <div className="relative mt-10 pt-10 sm:pt-0 mb-10">

    //   <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 items-center md:gap-20">
    //     <div
    //       className="content"
    //     >
    //       <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
    //         Fashion Made Easy
    //       </p>
    //       <p className="mt-5 md:text-md ">
    //         is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br /><br />
    //         is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
    //       </p>
    //       <div className="flex gap-4 mt-10">

    //         <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl  capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Start Now
    //         </button>
    //       </div>

    //     </div>
    //     <div
    //       className="conten flex flex-row items-center justify-start"
    //     >
    //       <img className="w-[200px] mr-2" src={Image1} alt="" />
    //       <img className="w-[200px] mt-20 mr-2" src={Image2} alt="" />
    //       <img className="w-[200px]" src={Image3} alt="" />
    //     </div>
    //   </div>
    // </div>

  )
}

export default Banner