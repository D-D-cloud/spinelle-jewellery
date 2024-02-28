import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Image from '../../assests/images/banner-img1.png'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Select, Option,Spinner
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import axios from "axios";
import '../../App.css'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export const ProductDetails = () => {
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [open, setOpen] = React.useState(0);
  const [data, setData]=useState({
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
        rate: 3.9,
        count: 120
    }
});
const imgData = [
  {
    imgelink:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  },
];

const [active, setActive] = React.useState(
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
);

const handleOpen = (value) => setOpen(open === value ? 0 : value);
 const getProductDetails = () =>{
  axios.get(`https://fakestoreapi.com/products/1`)
  .then(res => {
    // setData(res.data)
    setLoadingDetails(false)
    console.log(data)
  })
 }
  useEffect(()=>{

   
  },[])
  return (
    <Layout showFooter={false}>
      <button onClick={() => {getProductDetails()}}>get product</button>
      {
        loadingDetails ?
        <Spinner color="green" />
        :
 <Card className="flex-row m-14">
      <CardHeader shadow={false} floated={false} className="m-5 w-1/2 shrink-0">
      <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {imgData.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
<div class='product-description-col1'>
  <div class="flex flex-row mt-14">
  <div class="basis-1/2">
    <h3 style={{color : '#478610',fontSize:'20px'}}>PRODUCT DETAILS</h3>
  </div>
  </div>  
  <div class="flex flex-row mt-5">
    <div class="basis-1/2">
    <h1 >Product Code</h1>
    </div>
    <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>002792-889568</h1>
    </div>
  </div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
  <h1>Height</h1>
  </div>
  <div class="basis-1/2">
  <h1 style={{textAlign:'end'}}>24.05 mm</h1>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
  <h1>Width</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>9.0 mm</h1>
  </div>
</div>  
</div>
<div class='product-description-col1'>
<div class="flex flex-row mt-4">
  <div class="basis-1/2">
    <h3 style={{color : '#478610',fontSize:'20px'}}>METAL DETAILS</h3>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>Type</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>22Kt  Gold
</h1>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>Weight</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>11.2 gram</h1>
  </div>
</div>  
{/* <div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>Width</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Product Code</h1>
  </div>
</div>   */}
</div>

<div class='product-description-col1'>
<div class="flex flex-row mt-4">
  <div class="basis-1/2">
    <h3 style={{color : '#478610',fontSize:'20px'}}>PRICE BREAKUP</h3>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1 >Gold</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Rs.66,737/-
</h1>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>Making Charges</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Rs.17,026/-
</h1>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>GST</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Rs.2,512/-</h1>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>Total</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Rs.86,275/-
</h1>
  </div>
</div>  
</div>
<div class='product-description-colfin'>
<div class="flex flex-row mt-4">
  <div class="basis-1/2">
    <h3 style={{color : '#478610',fontSize:'20px'}}>Tags</h3>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1 >Product Code</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Product Code</h1>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>Height</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Product Code</h1>
  </div>
</div>  
<div class="flex flex-row mt-5">
  <div class="basis-1/2">
    <h1>Width</h1>
  </div>
  <div class="basis-1/2">
    <h1 style={{textAlign:'end'}}>Product Code</h1>
  </div>
</div>  
</div>

      </CardHeader>
        <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {data.title}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {data.price}
        </Typography>
        <div style={{ backgroundColor: "gray", padding: '10px 15px  5px 15px' }}>
        <Typography color="black" className="mb-8 font-normal">
        {data.description}
        </Typography>
        </div>
        <Typography variant="h4" color="blue-gray" className="sub-decsription">
        {data.price}
        </Typography>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Customize</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      {/* <!====select-size=====!> */}
      <div class='flex gap-2'>
      <div className="w-72 mt-8">
      <Select label="Select Size" animate={{ mount: { y: 0 }, unmount: { y: 25 },}}>
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    
    </div>

    <div className="w-72 mt-8">
<Link className="text-[#033C02] text-right m-auto float-end pb-4 hover:" to='/reset-password'>Not sure about size?</Link>
      </div>
      </div>
        <div class='flex gap-4'>
        <Button className="mt-6 w-60 mx-auto bg-[#478610]">
            Buy Now
          </Button>
          <Button variant="outlined" className="mt-6 w-60 mx-auto" color="green">10 + 1 Plan</Button>
        </div>
        <Card color="gray" variant="gradient" className="w-full max-w-[40rem] p-8 mt-14">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
        SPINELLE PROMISE  
        </Typography>
       
      </CardHeader>
      <CardBody className="p-0">
      <div class="flex flex-row mt-5">
    <div class="basis-1/2">
    <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>
    </div>
    <div class="basis-1/2">
    <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">200+ components</Typography>
          </li>
    </div>
    
  </div> 
  <div class="flex flex-row mt-3">
    <div class="basis-1/2">
    <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>
    </div>
    <div class="basis-1/2">
    <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">200+ components</Typography>
          </li>
    </div>
    
  </div>  
  <div class="flex flex-row mt-3">
    <div class="basis-1/2">
    <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>
    </div>
    <div class="basis-1/2">
    <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">200+ components</Typography>
          </li>
    </div>
    
  </div>   
        {/* <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">200+ components</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">40+ built-in pages</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">1 year free updates</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Life time technical support
            </Typography>
          </li>
        </ul> */}
      </CardBody>
     
    </Card>
      </CardBody>
    </Card>
}
    </Layout>
  )
}

