"use client"
import React, { useState } from "react";
import bg from "../../../public/authbg.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

const SignUp = () => {

  const bgImage = {
    backgroundImage: `URL(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
  };
  const router = useRouter();

  const [error, setError] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const formSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return; // Add return to stop execution if passwords do not match
    } 
    const formData = {
      name: data.name,
      email: data.email,
      address: data.address,
      number: data.number,
      password: data.password
    };
    console.log(formData);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };


  return (
    <div style={bgImage}>
      <div className="container mx-auto flex h-full items-center">
        <div className="hidden md:block md:w-1/2"></div>
        <div className="w-full md:w-1/2 py-16">
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="w-auto md:w-[500px] py-10 px-8 bg-[#ffffffe7] rounded-xl"
          >
            <div>
              <h2 className="text-center text-2xl font-semibold mb-2 text-slate-600">Sign up</h2>
              <p className="text-center text-sm text-slate-500">Please Enter Your Personal Data</p>
            </div>
            <div className="flex flex-col mt-2 md:mt-5">
              <label className="text-slate-600 font-semibold" htmlFor="name">User Name:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="text"
                {...register("name", { required: true })}
                id="name"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5">
              <label className="text-slate-600 font-semibold" htmlFor="email">Email:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5">
              <label className="text-slate-600 font-semibold" htmlFor="number">Contact No:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="number"
                {...register("number", { required: true })}
                id="number"
                placeholder="Contact Number"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5">
              <label className="text-slate-600 font-semibold" htmlFor="address">Permanent Address:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="text"
                {...register("address", { required: true })}
                id="address"
                placeholder="Address In Detail"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5">
              <label className="text-slate-600 font-semibold" htmlFor="password">Password:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="password"
                {...register("password", { required: true })}
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5">
              <label className="text-slate-600 font-semibold" htmlFor="confirmPassword">Confirm Password:</label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="password"
                {...register("confirmPassword", { required: true })}
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}

            <input
              className="bg-primary py-3 px-6 text-lg font-semibold bg-primaryColor text-white rounded-xl mt-5 md:mt-7 cursor-pointer"
              type="submit"
              value="Sign Up"
            />
            <div className="text-center my-3">
              <p>Sign Up With Google</p>
              <FcGoogle onClick={() => signIn("google", {
                callbackUrl: "https://simply-good-foods.vercel.app/"
              })} className="w-14 h-14 cursor-pointer mx-auto" />
            </div>

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
