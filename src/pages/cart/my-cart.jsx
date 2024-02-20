import React from "react";
import Layout from "../../components/layout";

export const Cart = () => {

    return (
        <Layout showFooter={false}>
            <div className="w-full mx-auto md:w-10/12 overflow-x-scroll px-4 md:overflow-x-hidden">
                <table role="table" className="w-full min-w-[500px] overflow-x-scroll">
                    <thead>
                        <tr role="row" >
                            <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xl md:text-xl"
                                >
                                    Shopping Cart
                                </div>
                            </th>
                            <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    className="flex items-center justify-center pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xl"
                                >
                                    <p>QTY</p>
                                </div>
                            </th>
                            <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                style={{ cursor: 'pointer' }}

                            >
                                <div
                                    className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xl"
                                >
                                    Price
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup" className="px-4">
                        <tr role="row">
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex items-center gap-2">
                                    <div className="w-full md:w-40 md:h-50">
                                        <img
                                            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                            className="rounded-sm h-[130px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2>Kurta</h2>

                                        <p
                                            className="text-sm font-medium text-navy-700 "
                                        >
                                            Order ID
                                        </p>
                                        <p
                                            className="text-sm font-medium text-navy-70"
                                        >
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex mt-2 items-center justify-center  mr-2 w-full m-auto sm:w-auto px-5 py-1.5">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <div className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6D8]">
                                        <p>2</p>
                                    </div>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <p className="text-md font-medium text-gray-600">
                                    9821
                                </p>
                            </td>
                        </tr>
                        <tr role="row">
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex items-center gap-2">
                                    <div className="w-full md:w-40">
                                        <img
                                            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                            className="rounded-sm h-[130px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2>Kurta</h2>

                                        <p
                                            className="text-sm font-medium text-navy-700 "
                                        >
                                            Order ID
                                        </p>
                                        <p
                                            className="text-sm font-medium text-navy-70"
                                        >
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex mt-2 items-center justify-center  mr-2 w-full m-auto sm:w-auto px-5 py-1.5">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <div className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6D8]">
                                        <p>2</p>
                                    </div>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <p className="text-md font-medium text-gray-600">
                                    9821
                                </p>
                            </td>
                        </tr>
                        <tr role="row">
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex items-center gap-2">
                                    <div className="w-full md:w-40">
                                        <img
                                            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                            className="rounded-sm h-[130px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2>Kurta</h2>

                                        <p
                                            className="text-sm font-medium text-navy-700 "
                                        >
                                            Order ID
                                        </p>
                                        <p
                                            className="text-sm font-medium text-navy-70"
                                        >
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex mt-2 items-center justify-center  mr-2 w-full m-auto sm:w-auto px-5 py-1.5">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <div className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6D8]">
                                        <p>2</p>
                                    </div>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <p className="text-md font-medium text-gray-600">
                                    9821
                                </p>
                            </td>
                        </tr>
                        <tr role="row">
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex items-center gap-2">
                                    <div className="w-full md:w-40">
                                        <img
                                            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                            className="rounded-sm h-[130px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2>Kurta</h2>

                                        <p
                                            className="text-sm font-medium text-navy-700 "
                                        >
                                            Order ID
                                        </p>
                                        <p
                                            className="text-sm font-medium text-navy-70"
                                        >
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex mt-2 items-center justify-center  mr-2 w-full m-auto sm:w-auto px-5 py-1.5">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <div className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6D8]">
                                        <p>2</p>
                                    </div>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <p className="text-md font-medium text-gray-600">
                                    9821
                                </p>
                            </td>
                        </tr>
                        <tr role="row">
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex items-center gap-2">
                                    <div className="w-full md:w-40">
                                        <img
                                            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                            className="rounded-sm h-[130px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2>Kurta</h2>

                                        <p
                                            className="text-sm font-medium text-navy-700 "
                                        >
                                            Order ID
                                        </p>
                                        <p
                                            className="text-sm font-medium text-navy-70"
                                        >
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex mt-2 items-center justify-center  mr-2 w-full m-auto sm:w-auto px-5 py-1.5">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <div className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6D8]">
                                        <p>2</p>
                                    </div>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <p className="text-md font-medium text-gray-600">
                                    9821
                                </p>
                            </td>
                        </tr>
                        <tr role="row">
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex items-center gap-2">
                                    <div className="w-full md:w-40">
                                        <img
                                            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                            className="rounded-sm h-[130px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2>Kurta</h2>

                                        <p
                                            className="text-sm font-medium text-navy-700 "
                                        >
                                            Order ID
                                        </p>
                                        <p
                                            className="text-sm font-medium text-navy-70"
                                        >
                                            Remove
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <div className="flex mt-2 items-center justify-center  mr-2 w-full m-auto sm:w-auto px-5 py-1.5">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <div className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6D8]">
                                        <p>2</p>
                                    </div>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </td>
                            <td className="py-3 text-sm" role="cell">
                                <p className="text-md font-medium text-gray-600">
                                    9821
                                </p>
                            </td>
                        </tr>


                    </tbody>
                </table>
                <div className="flex w-full flex-row justify-end items-end md:justify-end md:items-end my-10">
                    <button type="button" className="bg-[#FFE6D8] font-medium rounded-full float-end text-sm w-[300px] px-5 py-2.5 text-center dark:focus:ring-blue-800">Place Order</button>
                </div>
            </div>
        </Layout>
    )
}

