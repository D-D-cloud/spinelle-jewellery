import React, { useEffect, useState } from "react";
import Logo from '../../assests/images/reset-password.png'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

const ResetPassword = (props) => {
  const navigate = useNavigate()

  const [payload, setpayload] = useState({
    mobileNoOrEmail: '',
    otp: '',
    otp_verified: false,
    password: '',
    password2: '',
    accesstype: 'M',
  })

  const [sentOpt, setOtpSent] = useState(false)

  useEffect(() => {
    if (props?.userInfo)
      navigate('/dashboard')
  }, [props])

  useEffect(() => {
    if (sentOpt && props?.otpSuccess) {
      alert(props?.otpSuccess?.message);
    }

    setOtpSent(false)

  }, [props?.otpSuccess])

  const onChangeTextHandler = (event) => {
    const { name, value } = event.target
    setpayload({ ...payload, [name]: value })
  }

  const sendOtpHandler = () => {
    setOtpSent(true)
    props.sendOtp({ mobileNo: payload.mobileNoOrEmail })
  }

  const verifyOtpHandler = () => {
    props?.verifyOtp({ mobileNo: payload.mobileNoOrEmail, otp: payload?.otp })
  }

  const submitHandler = () => {
    props.resetPassword(payload)
  }


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto w-[277px] h-[277px] mb-10" src={Logo} alt="Your Company" />
      </div>

      <div className="min-w-lg w-[100%] mx-auto md:w-[40%] lg:w-[40%]">
        <form>
          <div className="relative z-0 mb-6 w-full group">
            <input type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="mobileNoOrEmail"
              id="mobileNoOrEmail"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeTextHandler}
            />
            <label for="mobileNoOrEmail" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
            <div className="absolute right-0 mt-[-35px] mr-3 cursor-pointer">
              <button
                type="button"
                className="bg-[#E6665D] font-medium rounded-sm text-sm w-full m-auto sm:w-auto px-4 text-white py-1 text-centerdark:focus:ring-blue-800"
                onClick={sendOtpHandler}
              >
                Send OTP
              </button>
            </div>
          </div>


          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="otp"
              id="otp"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeTextHandler}
            />
            <label for="otp" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">OTP</label>
            <div className="absolute right-0 mt-[-35px] mr-3 cursor-pointer">
              <button
                type="button"
                className="bg-[#E6665D] font-medium rounded-sm text-sm w-full m-auto sm:w-auto px-4 text-white py-1 text-centerdark:focus:ring-blue-800"
                onClick={verifyOtpHandler}
              >
                Verify
              </button>
            </div>
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
            <label for="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
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
            className="bg-[#FFE6D8] font-medium  text-sm w-full m-auto sm:w-auto px-10 py-2.5 text-centerdark:focus:ring-blue-800"
            onClick={submitHandler}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}



export default ResetPassword

