import { Link, Route, useLocation } from 'wouter';

export default function Home() {
    return (
        <>
            <div className="w-full h-full min-h-screen">
                <div className="absolute w-full h-full flex flex-col justify-center items-center text-center text-white font-theme-orbitron">
                    <h1 className="mt-10 text-8xl font-semibold leading-[120px]">Explore Bryan's <span className="text-rose-400">Certificates</span> and <span className="text-rose-400">Digital Credentials</span></h1>
                    <div className="w-[800px] mt-14 flex justify-between">
                        <Link to="/featured" className="flex items-center">
                            <button className="flex items-center px-5 py-3 text-2xl font-semibold uppercase border-white border-4 border-solid rounded-lg hover:bg-teal-500">
                                <i className="las la-star text-4xl mr-2"></i>
                                Featured Items
                            </button>
                        </Link>

                        <Link to="/certificates" className="flex items-center">
                            <button className="flex items-center px-5 py-3 text-2xl font-semibold uppercase border-white border-4 border-solid rounded-lg hover:bg-teal-500">
                                <i className="las la-certificate text-4xl mr-2"></i>
                                Explore Certs
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}