"use client"
import React from "react";
import bg from "../../../public/authbg.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const bgImage = {
    backgroundImage: `URL(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const formSubmit = data => console.log(data);

  return (
    <div style={bgImage}>
      <div className="container mx-auto flex h-full items-center">
        <div className="w-1/2">
        </div>
        <div className="w-1/2 py-16">

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="w-[500px] py-10 px-8 bg-[#ffffffe7] rounded-xl "
          >
            <div>
                <h2 className="text-center text-2xl font-semibold mb-2 text-slate-600">Sign up</h2>
                <p className="text-center text-sm text-slate-500">Please Enter Your Personal Data</p>
            </div>
            <div className="flex flex-col mt-2 md:mt-5 ">
              <label className="text-slate-600 font-semibold" htmlFor="name">User Name:</label>
              <Input
                className="border p-3  mt-2 bg-slate-50 text-md rounded-full h-12"
                type="text"
                {...register("name", { required: true })}
                id=""
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5 ">
              <label className="text-slate-600 font-semibold" htmlFor="email">Email:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="email"
                {...register("email", { required: true })}
                id=""
                placeholder="Enter Your Email"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5 ">
              <label className="text-slate-600 font-semibold" htmlFor="number">Contact No:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="number"
                {...register("number", { required: true })}
                id=""
                placeholder="Contact Number"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5 ">
              <label className="text-slate-600 font-semibold" htmlFor="address">Permanent Address:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="text"
                {...register("address", { required: true })}
                id=""
                placeholder="Address In Detail"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5 ">
              <label className="text-slate-600 font-semibold" htmlFor="password">Password:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="password"
                {...register("password", { required: true })}
                id=""
                placeholder="Password"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5 ">
              <label className="text-slate-600 font-semibold" htmlFor="confirmPassword">Confirm Password:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="password"
                {...register("confirmPassword", { required: true })}
                id=""
                placeholder="Confirm Password"
              />
            </div>

            <input
              className="bg-primary py-3 px-6 text-lg font-semibold bg-primaryColor text-white rounded-xl mt-5 md:mt-7 cursor-pointer"
              type="submit"
              value="Sign Up"
            />
            <p className="text-md mt-5">
              Already have an account?
              <Link className="text-[#FDB64E] font-bold" href={`/login`}>
                {" "}
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
