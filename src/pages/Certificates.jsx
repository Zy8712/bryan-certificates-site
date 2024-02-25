import CertificatesCarousel from "../components/certificates-page-components/CertificatesCarousel";
import RenderCertificates from "../components/certificates-page-components/RenderCertificates";

export default function Certificates() {
    return (
        <>
            <div className="w-full h-full min-h-screen pt-24 px-14 pb-14">
                <div className="w-full h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-8xl font-semibold font-theme-orbitron">
                        Certificates
                    </h1>

                    <div className="mt-12">
                        <CertificatesCarousel />
                    </div>

                    <div className="mt-20 w-full flex flex-wrap justify-around gap-4 text-white">
                        <RenderCertificates />
                    </div>

                </div>
            </div>
        </>
    );
}