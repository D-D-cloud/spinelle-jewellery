import React from "react";

const Categories = () => {
    return (
        <div className="container mx-auto p-4 lg:h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                {/* <!-- Blog Entry 1 --> */}
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 mt-10">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                    <figcaption className="absolute p-2 text-lg w-full text-white bottom-0 bg-slate-500">
                        <p className="text-center text-sm">Blouse</p>
                    </figcaption>
                </figure>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                    <figcaption className="absolute p-2 text-lg w-full text-white bottom-0 bg-slate-500">
                        <p className="text-center text-sm">Blouse</p>
                    </figcaption>
                </figure>
                {/* <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img by Meriç Dağlı https://unsplash.com/@meric" className="w-full h-auto object-cover rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur text-white p-2 rounded-b-lg">
                        <h1 className="text-sm text-center font-semibold">Blouse</h1>
                    </div>
                </div> */}

                {/* <!-- Blog Entry 2 --> */}
                {/* <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img by Meriç Dağlı https://unsplash.com/@meric" className="w-full h-auto object-cover rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur text-white p-2 rounded-b-lg">
                    <h1 className="text-sm text-center font-semibold">Blouse</h1>
                    </div>
                </div> */}

                {/* <!-- Blog Entry 3 --> */}
                {/* <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img by Meriç Dağlı https://unsplash.com/@meric" className="w-full h-auto object-cover rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur text-white p-2 rounded-b-lg">
                    <h1 className="text-sm text-center font-semibold">Blouse</h1>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Categories