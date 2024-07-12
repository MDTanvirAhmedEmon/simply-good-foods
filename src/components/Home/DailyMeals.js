import { FiArrowUpRight } from "react-icons/fi";
import sideImage from "../../../public/section-img.jpg";
import { Button } from "../ui/button";

const DailyMeals = () => {
  const bgImage = {
    backgroundImage: `URL(${sideImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
  };
  return (
    <div id="daily" className=" bg-neutral-300 h-auto">
      <div className="flex ">
        <div className="w-full md:w-1/2 h-[500px] md:h-[600px] flex  items-center">

          <div className=" h-[280px] md:h-[250px] bg-white  w-full rounded-r-[80px] mr-5 md:mr-10 relative">
            <div className=" absolute left-[4%] lg:left-[8%] xl:left-[20%] 2xl:left-[32%] top-8">
              <h1 className="text-3xl md:text-4xl text-slate-700 font-bold mb-4">
                Make daily meals <br></br>healthy and moderate
              </h1>
              <p className=" text-md md:text-xl text-slate-500 mb-4">Ingredients are naturally rich and full of taste.</p>
              <Button
                variant=""
                className="py-5 md:py-6 text-lg rounded-xl px-3"
                size="lg"
              >
                Meal Plans{" "}
                <FiArrowUpRight className="w-5 md:w-7 h-5 md:h-7 ml-2 " />
              </Button>
            </div>
          </div>

        </div>

        <div className="hidden md:block w-1/2 h-[600px]" style={bgImage}></div>
      </div>
    </div>
  );
};

export default DailyMeals;
