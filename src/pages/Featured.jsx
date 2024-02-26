import FeaturedCredentialsBlock from "../components/featured-page-components/FeaturedCredentialsBlock";
import FeaturedCertificatesBlock from "../components/featured-page-components/FeaturedCertificatesBlock";
import FeaturedBadgesBlock from "../components/featured-page-components/FeaturedBadgesBlock";

export default function Featured() {
    return (
        <>
            <div className="w-full h-full min-h-screen pt-24 px-0 custom-sm:px-6 custom-lg:px-14 pb-14">
                <div className="w-full h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                        Featured
                    </h1>

                    <div className="w-full flex justify-center">
                        <FeaturedBadgesBlock />
                    </div>

                    <div className="w-full flex justify-center">
                        <FeaturedCredentialsBlock />
                    </div>

                    <div className="w-full flex justify-center">
                        <FeaturedCertificatesBlock />
                    </div>

                </div>
            </div>
        </>
    );
}