import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";


const mainLayout = async ({ children }) => {

  return (
    <div className="scroll-smooth">
      <Header></Header>

      {children}
      <Footer></Footer>
    </div>
  );
};

export default mainLayout;
