import { Link } from 'wouter';
import FeaturedCredentialsCarousel from "./featured-blocks-components/FeaturedCredentialsCarousel";

export default function FeaturedCredentialsBlock() {
    return (
        <>
            <div className="w-full custom-xl:w-[1200px] h-[388px] mt-10 bg-white bg-opacity-50 border-white border-4 border-solid rounded-lg px-10">
                <div className="w-full flex justify-between items-center text-white mt-4 mb-6">
                    <h2 className="text-4xl uppercase font-bold font-theme-orbitron">Credentials</h2>

                    <Link to='/credentials' className="text-xl font-bold font-theme-oxanium link-custom">
                        View All Credentials
                        <i className="las la-arrow-circle-right ml-2"></i>
                    </Link>
                </div>
                <FeaturedCredentialsCarousel />
            </div>
        </>
    );
}