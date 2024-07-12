import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { useSelector } from "react-redux";

const mainLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);


  return (

    <div className="scroll-smooth">
      <Header session={session}></Header>

      {children}
      <Footer></Footer>
    </div>

  );
};

export default mainLayout;
