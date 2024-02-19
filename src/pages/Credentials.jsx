import CredentialsCarousel from "../components/credentials-page-components/CredentialsCarousel";
import RenderCredentials from "../components/credentials-page-components/RenderCredentials";

export default function Credentials() {
    return (
        <>
            <div className="w-full h-full min-h-screen pt-24 px-14">
                <div className="w-full h-full flex justify-around">

                    <div className="mt-40">
                        <CredentialsCarousel />
                    </div>


                    <div className="mt-16 w-[900px] text-white">
                        <h1 className="text-6xl font-semibold font-theme-orbitron">
                            Credentials
                        </h1>

                        <div className="mt-8 flex flex-wrap justify-around gap-4">
                            <RenderCredentials />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}