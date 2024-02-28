import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { endPoints, postRequest } from "../../apiConfig";
import Email from '../../assests/images/email.png'
import Password from '../../assests/images/pswd.png'

const SignIn = (props) => {
  const navigate = useNavigate()


  const [payload, setPayload] = useState({
    "mobileNoOrEmail": "TESTADMIN@DDCLOUD.co",
    "password": "9766452178"
  })


  const onChangeTextHandler = (event) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value })
  }

  const submitHandler = () => {
    if (payload?.mobileNoOrEmail === '' || payload?.password === '') {
      alert('Please enter user name or password')
      return;
    }

    postRequest(endPoints.signIn, payload).then(async (response) => {
      console.log(response)

      if (response) {
        await localStorage.setItem("token", response?.token);
        await navigate('/dashboard')
      }

    })
  }

  return (
    <div class="flex justify-center  items-center h-[100vh]">

      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-center text-[#033C02]">
          USER LOGIN
        </Typography>
        <form className="mt-8 mb-2 w-100 max-w-screen-lg sm:w-96">

          <div className="mb-5 flex flex-row gap-6">
            <img src={Email} className="h-11" />
            <Input
              size="lg"
              placeholder="name@mail.com"
              label="E Mail"
              color="teal"
              name="mobileNoOrEmail"
              onChange={onChangeTextHandler}
            />
          </div>
          <div className="mb-1 flex flex-row gap-6">
            <img src={Password} className="h-11" />

            <Input
              type="password"
              size="lg"
              label="Passowrd"
              placeholder="********"
              color="teal"
              name="password"
              onChange={onChangeTextHandler}
            />
          </div>
          <div className="m">

            <Checkbox
              color="teal"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Remeber Me
                </Typography>
              }
              containerProps={{ className: "ml-2.5" }}
            />
            <Link className="text-[#E6665D] text-right m-auto float-end pb-4" to='/reset-password'>Forgot Password ?</Link>
          </div>
          <div className="flex w-full flex-col justify-center items-center md:justify-start md:items-start mb-3">

            <Button className="mt-6 w-60 mx-auto bg-[#478610]"
              onClick={submitHandler}>
              Login
            </Button>
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a href="/sign-up" className="font-medium text-gray-900">
              Create Account
            </a>
          </Typography>
        </form>
      </Card>
    </div>

  )
}




export default SignIn

