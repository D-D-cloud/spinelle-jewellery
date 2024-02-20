import React from "react";
import Layout from "../../components/layout";
import Image from '../../assests/images/banner-img1.png'

export const ProductDetails = () => {
  return (
    <Layout showFooter={false}>

      <div className="flex flex-col justify-start my-20 p-4 items-star mx-auto md:w-[70%] px-4 md:p-4 xl:p-4 w-full">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="w-full h-fit" >
            <img className="w-full h-[450px]" src={Image} alt="dress" />
          </div>

          <div className="md:flex-row flex-col flex justify-between items-start space-y-4 md:space-y-4 p-10 w-full bg-white">
            <div className="w-full flex flex-col justify-start items-start space-y-10">
              <h1>Lehangi</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</p>

              <div className="flex justify-start items-center flex-row space-y-1">
                <div className="flex items-center mt-2 bg-[#FFE6D8] mr-2 w-full m-auto sm:w-auto px-5 py-1.5">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </button>
                  <span className="text-gray-700 mx-2">2</span>
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </button>
                </div>
                <button type="button" className="bg-[#FFE6D8] font-medium text-sm w-full m-auto sm:w-auto px-5 py-2 text-centerdark:focus:ring-blue-800">Add To Cart</button>
                <button type="button" className="bg-[#FFE6D8] font-medium text-sm w-full m-auto sm:w-auto px-5 py-2 text-centerdark:focus:ring-blue-800 ml-5 "><i className="fas fa-heart" /></button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  )
}

