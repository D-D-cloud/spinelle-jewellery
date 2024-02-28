import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API, endPoints, getFullUrl } from "../../apiConfig";

const SignUp = (props) => {
  const navigate = useNavigate()
  const [payload, setpayload] = useState({
    firstName: '',
    mobileNo: '',
    email: '',
    password: '',
    password2: ''
  })

  const onChangeTextHandler = (event) => {
    const { name, value } = event.target
    setpayload({ ...payload, [name]: value })
  }

  const submitHandler = () => {
    API.POST(getFullUrl(endPoints.signUp), payload).then((response) => {
      console.log("respo"+response.status)
      if (response.status === 400){
        navigate('/dashboard')
      } 
    })
  }


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mx-auto w-[277px] mb-10 text-3xl text-green-800">Signup with spinelle</h1>
      </div>

      <div class="flex items-center justify-center space-x-2 my-5">
        <span class="h-px w-60 bg-gray-500"></span>
        <span class="text-gray-400 font-normal">or</span>
        <span class="h-px w-60 bg-gray-500"></span>
      </div>

      <div className="min-w-lg w-[100%] mx-auto md:w-[40%] lg:w-[30%]">
        <form>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="firstName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              onChange={onChangeTextHandler}
            />
            <label for="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Name</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              onChange={onChangeTextHandler}
            />
            <label for="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Mail</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="mobileNo"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              onChange={onChangeTextHandler}
            />
            <label for="mobileNo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Number</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeTextHandler}
            />
            <label for="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Create your Password</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="password2"
              id="password2"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeTextHandler} />
            <label for="password2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
          </div>

        </form>
        <div className="flex w-full flex-col justify-center items-center md:justify-start md:items-start mb-3">
          <button
            type="submit"
            className="bg-[green] text-white font-medium  text-sm w-full m-auto sm:w-auto px-10 py-2.5 text-centerdark:focus:ring-blue-800"
            onClick={submitHandler}
          >
            Sign Up
          </button>
        </div>
        <div className="flex w-full flex-col justify-center items-center md:justify-start md:items-start mb-3">
          <p className="font- m-auto">OR</p>
          <p className="m-auto">Already have an account ? <Link className="text-[green]" to='/sign-in' >Login</Link></p>
        </div>
      </div>
    </div>
  )
}


export default SignUp

