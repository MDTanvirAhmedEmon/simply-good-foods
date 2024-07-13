"use client";
import React, { useEffect, useState } from "react";
import bg from "../../../public/authbg.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const LogIn = () => {
  const bgImage = {
    backgroundImage: `URL(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  const [error, setError] = useState(null);
  const router = useRouter();
  const {data:session, status: sessionStatus} = useSession();
  useEffect(()=> {
    if(sessionStatus === 'authenticated'){
      router.replace('/')
    }
  },[sessionStatus, router])



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formSubmit = async(data) => {
    console.log(data);
    const res = await signIn('credentials',{
      redirect: false,
      email: data?.email,
      password: data?.password
    })
    console.log(res);
    if(res?.url){
      router.replace('/');
    }
    if(res?.error){
      console.log(res.error);
      setError("Invalid email or password");
    }
  };

  if(sessionStatus === 'loading') {
    return (
      <div className="py-20">
        <h1 className="text-4xl text-center text-slate-600 font-bold">Loading...</h1>
      </div>
    )
  }

  return (
    <div style={bgImage}>
      <div className="container mx-auto flex h-full items-center">
        <div className="hidden lg:block md:w-1/2"></div>
        <div className="w-full lg:w-1/2 py-16">
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="lg:w-[500px] py-10 px-8 bg-[#ffffffe7] rounded-xl "
          >
            <div>
              <h2 className="text-center text-2xl font-semibold mb-2 text-slate-600">
                Log In
              </h2>
              <p className="text-center text-sm text-slate-500">
                Please enter your email and password to continue
              </p>
            </div>
            <div className="flex flex-col mt-2 md:mt-5 ">
              <label className="text-slate-600 font-semibold" htmlFor="email">
                Email:
              </label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="email"
                {...register("email", { required: true })}
                id=""
                placeholder="Enter Your Email"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-5 ">
              <label
                className="text-slate-600 font-semibold"
                htmlFor="password"
              >
                Password:
              </label>
              <Input
                className="border p-3 mt-2 bg-slate-50 text-md rounded-full h-12"
                type="password"
                {...register("password", { required: true })}
                id=""
                placeholder="Password"
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <input
              className="bg-primary py-3 px-6 text-lg font-semibold bg-primaryColor text-white rounded-xl mt-5 md:mt-7 cursor-pointer"
              type="submit"
              value="Log In"
            />
            <div className=" text-center my-3">
              <p>Log In With Google</p>
              <FcGoogle
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "https://simply-good-foods.vercel.app/",
                  })
                }
                className="w-14 h-14 cursor-pointer mx-auto"
              />
            </div>
            <p className="text-md mt-5">
              Do not have any account?
              <Link className="text-[#FDB64E] font-bold " href={`/signup`}>
                {" "}
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
