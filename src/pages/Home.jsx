import { Link, Route, useLocation } from 'wouter';

export default function Home() {
    return (
        <>
            <div className="w-full h-full min-h-screen bg-black !bg-home-background bg-cover">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playbackRate={0.1}
                >
                    <source src="../src/assets/production_id_4443250_720p.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute w-full h-full flex flex-col items-center text-center bg-black bg-opacity-50 text-white font-theme-orbitron">
                    <h1 className="mt-48 text-8xl font-semibold leading-[120px]">Explore Bryan's <span className="text-teal-500">Certificates</span> and <span className="text-teal-500">Digital Credentials</span></h1>
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