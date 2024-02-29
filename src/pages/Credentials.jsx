import CredentialsCarousel from "../components/credentials-page-components/CredentialsCarousel";
import RenderCredentials from "../components/credentials-page-components/RenderCredentials";

export default function Credentials() {
    return (
        <>
            <div className="w-full h-full min-h-screen pt-24 px-0 custom-sm:px-6  md:px-8 custom-lg:px-10 lg:px-14 pb-14 transition-all duration-500 ease-in-out">
                <div className="w-full h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                        Credentials
                    </h1>

                    <div className="w-full mt-12 flex flex-col custom-md:flex-row justify-start custom-md:justify-around items-center custom-md:items-start text-white">

                        <div className="mt-5">
                            <CredentialsCarousel />
                        </div>

                        <div className="w-full custom-md:w-[800px] mt-20 custom-md:mt-0 flex flex-wrap justify-around gap-4">
                            <RenderCredentials />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}