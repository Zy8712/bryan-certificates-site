import { useState } from "react";

import CertificatesCarousel from "../components/certificates-page-components/CertificatesCarousel";
import CertificatesFilter from "../components/certificates-page-components/CertificatesFilter";
import RenderCertificates from "../components/certificates-page-components/RenderCertificates";

export default function Certificates() {

    const [activeFilter, setActiveFilter] = useState(0);
    const toggleFilter = (num) => {
        if (num != activeFilter) {
            setActiveFilter(num);
            console.log(num);
        }
    }

    return (
        <>
            <div className="w-full h-full min-h-screen flex justify-center pt-24 px-0 custom-sm:px-6 custom-lg:px-14 pb-14 transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1200px] h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                        Certificates
                    </h1>

                    <div className="mt-12">
                        <CertificatesCarousel />
                    </div>

                    <div className="mt-14">
                        <CertificatesFilter activeFilter={activeFilter} toggleFilter={toggleFilter} />
                    </div>

                    <div className="mt-5 w-full flex flex-wrap justify-around gap-y-1 custom-sm:gap-y-8 text-white">
                        <RenderCertificates activeFilter={activeFilter} />
                    </div>

                </div>
            </div>
        </>
    );
}