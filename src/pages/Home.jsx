import { Link } from 'wouter';
import Space_Icon from "../assets/icons/space-svgrepo-com.svg";
import SocialIcons from '../components/navbar-components/SocialIconsReduced';
import GA4_Cred from "../assets/7a4fe3be-f344-4b62-b0e7-482a75d425f9.png";
import Amp_Cred from "../assets/amplitude-foundations-analytics.png";

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

                    <a href="https://skillshop.credential.net/09316729-8cbb-4e32-82ef-512e3dd3bfe9#acc.onILFHw3" className="w-40 h-40 absolute bottom-1 left-1">
                        <img src={GA4_Cred} />
                        <div className="absolute z-30 -top-1 -right-5 w-20 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-xl">
                            <span>NEW</span>
                            <i className="las la-external-link-alt ml-1"></i>
                        </div>
                    </a>

                    <a href="https://www.credly.com/badges/c7d7c4aa-5ce8-425a-82ce-c6ee7dd0a845" className="w-40 h-40 absolute bottom-1 right-1">
                        <img src={Amp_Cred} />
                        <div className="absolute z-30 -top-1 -left-5 w-20 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-xl">
                            <span>NEW</span>
                            <i className="las la-external-link-alt ml-1"></i>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}