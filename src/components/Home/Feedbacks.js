import SectionTitle from "./utils/SectionTitle";
import person1 from "../../../public/person1.jpg"
import person2 from "../../../public/person2.jpg"
import person3 from "../../../public/person3.jpg"
import Image from "next/image";


const Feedbacks = () => {
    return (
        <div className="pb-28 pt-8">
            <div>
                <SectionTitle>Feedbacks</SectionTitle>
                <div className="flex flex-col xl:flex-row gap-10 mt-16 justify-center mx-5 xl:mx-0">
                <div className="flex w-auto 2xl:w-[600px] items-center bg-stone-100 p-8 ">
                    <Image className="hidden md:block rounded-full mr-4" src={person1} height={150} width={150} alt="person"/>
                    <Image className=" md:hidden rounded-full mr-4" src={person1} height={90} width={90} alt="person"/>
                    <div >
                        <p className="mb-1 text-lg text-slate-600 font-bold">Anjelina</p>
                        <p className="mb-1 text-[#FDB64E] text-md">Student</p>
                        <p className="text-lg text-slate-500">Thank you for all, you service was soo good and safe, i will 
                        suggest my friends about your fantastic services</p>
                    </div>
                </div>

                <div className="flex w-auto 2xl:w-[600px] items-center bg-stone-100 p-8  ">
                    <Image className="hidden md:block rounded-full mr-4" src={person2} height={150} width={150} alt="person"/>
                    <Image className=" md:hidden rounded-full mr-4" src={person2} height={90} width={90} alt="person"/>
                    <div >
                        <p className="mb-1 text-lg text-slate-600 font-bold">David</p>
                        <p className="mb-1 text-[#FDB64E] text-md">Student</p>
                        <p className="text-lg text-slate-500">Thank you for all, you service was soo good and safe, i will 
                        suggest my friends about your fantastic services</p>
                    </div>
                </div>

                <div className="flex w-auto 2xl:w-[600px] items-center bg-stone-100 p-8 ">
                    <Image className="hidden md:block rounded-full mr-4" src={person3} height={150} width={150} alt="person"/>
                    <Image className=" md:hidden rounded-full mr-4" src={person3} height={90} width={90} alt="person"/>
                    <div >
                        <p className="mb-1 text-lg text-slate-600 font-bold">Maria</p>
                        <p className="mb-1 text-[#FDB64E] text-md">Student</p>
                        <p className="text-lg text-slate-500">Thank you for all, you service was soo good and safe, i will 
                        suggest my friends about your fantastic services</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Feedbacks;