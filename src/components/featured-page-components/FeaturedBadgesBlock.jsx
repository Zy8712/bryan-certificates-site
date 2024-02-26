import { Link } from 'wouter';

export default function FeaturedBadgesBlock() {
    return (
        <>
            <div className="w-[1200px] h-[460px] mt-10 bg-white bg-opacity-50 border-white border-4 border-solid rounded-lg px-10">
                <div className="w-full flex justify-between items-center text-white mt-4 mb-6">
                    <h2 className="text-4xl uppercase font-bold font-theme-orbitron">Badges</h2>

                    <Link to='/badges' className="text-xl font-bold font-theme-oxanium link-custom">
                        View All Badges
                        <i className="las la-arrow-circle-right ml-2"></i>
                    </Link>
                </div>
                <div className="rounded-md overflow-hidden">
                    <a href="https://holopin.io/@bryanli712" target="_blank">
                        <img src="https://holopin.me/bryanli712" alt="@bryanli712's Holopin board" />
                    </a>
                </div>
            </div>
        </>
    );
}