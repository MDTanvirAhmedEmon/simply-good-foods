import ReduxProvider from "@/lib/ReduxProvider";
import "./globals.css";
import { getServerSession } from "next-auth";
import AuthProvider from "./session/sessionProvider";


export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        {" "}
        <ReduxProvider>
          <AuthProvider session={session}>{children}</AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
