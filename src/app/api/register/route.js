
import { connect } from "@/db/db";
import User from "@/db/models/User";

import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const {  name, email, address, number, password } = await request.json();
    console.log('comming', name, email, address, number, password );

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    console.log('exists', user);

    const newUser = new User({
      name,
      email,
      address,
      number,
      password,
    });
    console.log('new user', newUser);

    const savedUser = await User.create(newUser);
    console.log('saved user', savedUser);


    return new NextResponse("user is registered", { status: 200 })
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}