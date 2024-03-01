import { Link } from 'wouter';
import Space_Icon from "../assets/icons/space-svgrepo-com.svg";
import SocialIcons from '../components/navbar-components/SocialIconsReduced';

export default function Home() {
    return (
        <>
            <div className="w-full h-full min-h-screen transition-all duration-500 ease-in-out">
                <div className="relative w-full h-full min-h-screen flex flex-col justify-center items-center text-center text-white font-theme-orbitron py-16">
                    <div className="w-96 h-96 block custom-sm:hidden">
                        <img src={Space_Icon} alt='' className='w-96 h-96' />
                    </div>
                    
                    <h1 className="w-full mt-0 custom-sm:mt-10 text-[40px] custom-sm:text-5xl sm:text-6xl custom-md:text-[80px] lg:text-8xl font-bold custom-sm:font-semibold leading-[48px] custom-sm:leading-[56px] sm:leading-[72px] custom-md:leading-[100px] lg:leading-[120px]">
                        Explore Bryan's <span className="text-rose-400">Certificates</span> and <span className="text-rose-400">Digital Credentials</span>
                    </h1>

                    <div className="w-auto sm:w-[550px] md:w-[650px] lg:w-[800px] h-36 sm:h-auto mt-10 sm:mt-14 flex flex-col sm:flex-row justify-between sm:justify-between items-center">
                        <Link to="/featured" className="flex items-center">
                            <button className="flex justify-center items-center w-72 sm:w-auto h-16 sm:h-auto px-0 sm:px-5 py-0 sm:py-3 text-xl md:text-xl lg:text-2xl font-semibold uppercase border-white border-4 border-solid rounded-lg hover:bg-teal-500">
                                <i className="las la-star text-3xl md:text-3xl lg:text-4xl mr-2"></i>
                                Featured Items
                            </button>
                        </Link>

                        <Link to="/certificates" className="flex items-center">
                            <button className="flex justify-center items-center w-72 sm:w-auto h-16 sm:h-auto px-0 sm:px-5 py-0 sm:py-3 text-xl md:text-xl lg:text-2xl font-semibold uppercase border-white border-4 border-solid rounded-lg hover:bg-teal-500">
                                <i className="las la-certificate text-3xl md:text-3xl lg:text-4xl mr-2"></i>
                                Explore Certs
                            </button>
                        </Link>
                    </div>

                    <div className="absolute z-50 bottom-6 xl:hidden">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </>
    );
}