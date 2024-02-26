import { Link } from 'wouter';
import FeaturedCertificatesCarousel from "./featured-blocks-components/FeaturedCertificatesCarousel";

export default function FeaturedCertificatesBlock() {
    return (
        <>
            <div className="w-[1200px] h-[388px] mt-10 bg-white bg-opacity-50 border-white border-4 border-solid rounded-lg px-10">
                <div className="w-full flex justify-between items-center text-white mt-4 mb-6">
                    <h2 className="text-4xl uppercase font-bold font-theme-orbitron">Certificates</h2>

                    <Link to='/certificates' className="text-xl font-bold font-theme-oxanium link-custom">
                        View All Certificates
                        <i className="las la-arrow-circle-right ml-2"></i>
                    </Link>
                </div>
                <FeaturedCertificatesCarousel />
            </div>
        </>
    );
}