import { connect } from "@/db/db";
import User from "@/db/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        console.log('email before db', credentials.email);
        try {
          const user = await User.findOne({ email: credentials.email });
          console.log('after_DB',user);
          if (user.password === credentials.password) {
            return user;
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const { name, email } = user;
          await connect();
          const ifUserExists = await User.findOne({ email });
          if (ifUserExists) {
            return user;
          }
          const newUser = new User({
            name: name,
            email: email,
          });
          const res =  await User.create(newUser);
          if (res.status === 200 || res.status === 201) {
            console.log(res)
            return user;
          }

        } catch (err) {
          console.log(err);
        }
      }
      return user;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
