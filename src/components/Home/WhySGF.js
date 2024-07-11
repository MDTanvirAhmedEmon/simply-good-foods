import Image from "next/image";
import health from "../../../public/health.png";
import protein from "../../../public/protein.png";
import variety from "../../../public/variety.png";

const WhySGF = () => {
  return (
    <div className="bg-[#FDFDFD] py-20">
      <div className="container mx-auto">
        <h1 className="text-slate-600 text-4xl md:text-5xl font-bold text-center">Why Simply Good Food</h1>
        <div className="flex flex-col md:flex-row gap-8 text-center mt-14">
          <div>
            <Image className="mx-auto" src={health} height={150} width={150} alt="img" />
            <h2 className="text-3xl font-semibold text-slate-600 my-6">Health awareness</h2>
            <p className="text-lg text-slate-500">
              Our portions are bigger. Meals designed to fill you up with the
              nutrients you need to perform at your best.
            </p>
          </div>
          <div>
            <Image className="mx-auto" src={protein} height={120} width={120} alt="img" />
            <h2 className="text-3xl font-semibold text-slate-600 my-6">More Protein</h2>
            <p className="text-lg text-slate-500">
                Protein rich meals to FUEL your workouts, improve 
                recuperation, and increase outcomes.
            </p>
          </div>
          <div>
            <Image className="mx-auto" src={variety} height={130} width={130} alt="img" />
            <h2 className="text-3xl font-semibold text-slate-600 my-6">Health awareness</h2>
            <p className="text-lg text-slate-500">
                Select breakfasts, snacks, and bulk proteins/sides. 
                You can change it up at any moment or stick with the 
                same routine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySGF;
