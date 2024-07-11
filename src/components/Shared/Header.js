import Image from "next/image";
import logo from "../../../public/logo.jpg"
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <div>
            <div className=" h-16 bg-[#FDB64E] flex items-center justify-center">
                <h3 className=" text-white text-xl font-semibold ">%% Free shipping on all orders %%</h3>
            </div>
            <div className=" shadow-lg">
                <div className=" container mx-auto flex items-center justify-between py-4">
                    <div>
                        <Image src={logo} height={80} width={80} alt="logo"></Image>
                    </div>
                    <nav>
                        <ul className=" flex gap-4 text-xl font-semibold text-slate-500 items-center">
                            <li><Link href={'/'}>Home</Link></li><span className=" text-slate-300">|</span>
                            <li><Link href={'/'}>Our menus</Link></li><span className=" text-slate-300">|</span>
                            <li><Link href={'/'}>Meal plans</Link></li><span className=" text-slate-300">|</span>
                            <li><Link href={'/'}>Catering</Link></li><span className=" text-slate-300">|</span>
                            <li><Link href={'/'}>How it work</Link></li><span className=" text-slate-300">|</span>
                            <li><Link href={'/'}>Testimonials</Link></li><span className=" text-slate-300">|</span>
                            <li><Link href={'/'}>FAQ</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <Button  variant="outline" size="lg" className="rounded-xl mr-4 px-8"><Link href={'/login'}>Log In</Link></Button>
                        <Button  size="lg" className=" rounded-xl text-lg"><Link href={'/signup'}>Sign Up</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;