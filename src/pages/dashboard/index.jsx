import React from "react";
import Layout from "../../components/layout";
import Women from '../../assests/images/women.png'
import Men from '../../assests/images/men.png'
import Girls from '../../assests/images/girls.png'
import Boys from '../../assests/images/boys.png'
import Banner from "../../components/banner";
import { Carousel } from "@material-tailwind/react";


const DashBoard = () => {

  return (
    <Layout showFooter={true}>
      <Banner />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-white my-10">
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-4">
            {/* <img className="object-center object-cover rounded-full h-36 w-36" src={Women} alt="photo" /> */}
            <img className="object-center object-cover rounded-full h-[190px] w-[190px]" src={Women} alt="photo" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700 font-bold mb-2">Bracelet</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-4">
            <img className="object-center object-cover rounded-full h-[190px] w-[190px]" src={Men} alt="photo" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700 font-bold mb-2">Ear Rings</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-4">
            <img className="object-center object-cover rounded-full h-[190px] w-[190px]" src={Boys} alt="photo" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700 font-bold mb-2">Ring</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-4">
            <img className="object-center object-cover rounded-full h-[190px] w-[190px]" src={Girls} alt="photo" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700 font-bold mb-2">Pendant</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-4">
            <img className="object-center object-cover rounded-full h-[190px] w-[190px]" src={Girls} alt="photo" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700 font-bold mb-2">Necklace</p>
          </div>
        </div>
      </div>

      <Carousel loop={true} autoplay={true} className="rounded-sm">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="image 1"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="image 2"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 3"
          className="h-full w-full object-cover object-center"
        />
      </Carousel>


    </Layout>
  )
}

export default DashBoard