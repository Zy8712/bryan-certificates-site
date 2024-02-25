import CredentialsCarousel from "../components/credentials-page-components/CredentialsCarousel";
import RenderCredentials from "../components/credentials-page-components/RenderCredentials";

export default function Credentials() {
    return (
        <>
            <div className="w-full h-full min-h-screen pt-24 px-14 pb-14">
                <div className="w-full h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-8xl font-semibold font-theme-orbitron">
                        Credentials
                    </h1>

                    <div className="w-full mt-12 flex justify-between text-white">

                        <div className="mt-5">
                            <CredentialsCarousel />
                        </div>

                        <div className="w-[900px] flex flex-wrap justify-around gap-4">
                            <RenderCredentials />
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    );
}