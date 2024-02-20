import React from "react";
import Layout from "../../components/layout";

const MyOrders = () => {

    return (
        <Layout showFooter={false}>

            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order history</h1>
                    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">2 orders</p>
                </div>

                <div className="mt-5 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start p-4 items-start dark:bg-gray-800 bg-gray-50 px-4 md:p-4 xl:p-4 w-full">
                            <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="w-full md:w-40">
                                    <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                    <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                </div>
                                <div className="md:flex-row flex-col flex justify-between items-start w-full space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-3">
                                        <h3 className="text-md dark:text-white xl:text-md font-normal text-gray-700">Delivered On Dec 16, 2023</h3>
                                        <p className="text-sm dark:text-white leading-none text-gray-800 px-2">stylish brown kurta</p>
                                        <div className="flex justify-start items-center flex-row space-y-1">
                                            <p className="text-sm dark:text-white leading-none text-gray-800 px-2"><span className="dark:text-gray-500 text-gray-500">Size: </span> M</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800  px-2"><span className="dark:text-gray-500 text-gray-500">Qty: </span>1</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800  px-2"><span className="dark:text-gray-700 text-gray-700 font-semibold">RS 12,000</span></p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full ">
                                        <div className="flex justify-start items-start flex-col space-y-4">
                                            <p className="text-sm dark:text-white leading-none text-gray-800">Status</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800">Delivered</p>
                                        </div>
                                        <div className="flex justify-start items-start flex-col space-y-4">
                                            <p className="text-sm dark:text-white leading-none text-gray-800">Delivered By</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800">14-01-2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col justify-start p-4 items-start dark:bg-gray-800 bg-gray-50 px-4 md:p-4 xl:p-4 w-full">
                            <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="w-full md:w-40">
                                    <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                    <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                </div>
                                <div className="md:flex-row flex-col flex justify-between items-start w-full space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-3">
                                        <h3 className="text-md dark:text-white xl:text-md font-normal text-gray-700">Delivered On Dec 16, 2023</h3>
                                        <p className="text-sm dark:text-white leading-none text-gray-800 px-2">stylish brown kurta</p>
                                        <div className="flex justify-start items-center flex-row space-y-1">
                                            <p className="text-sm dark:text-white leading-none text-gray-800 px-2"><span className="dark:text-gray-500 text-gray-500">Size: </span> M</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800  px-2"><span className="dark:text-gray-500 text-gray-500">Qty: </span>1</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800  px-2"><span className="dark:text-gray-700 text-gray-700 font-semibold">RS 12,000</span></p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <div className="flex justify-start items-start flex-col space-y-4">
                                            <p className="text-sm dark:text-white leading-none text-gray-800">Status</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800">Delivered</p>
                                        </div>
                                        <div className="flex justify-start items-start flex-col space-y-4">
                                            <p className="text-sm dark:text-white leading-none text-gray-800">Delivered By</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800">14-01-2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


            </div>
        </Layout>
    )
}

export default MyOrders