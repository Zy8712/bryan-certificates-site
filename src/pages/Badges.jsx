import HolopinBoard from "../components/badges-page-components/HolopinBoard";
import VariousBadges from "../components/badges-page-components/VariousBadges";

export default function Badges() {
    return (
        <>
            <div className="w-full h-full min-h-screen pt-24 px-14 pb-14">
                <div className="w-full h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-8xl font-semibold font-theme-orbitron">
                        Pins / Badges
                    </h1>

                    <div className="mt-12 rounded-2xl overflow-hidden">
                        <HolopinBoard />
                    </div>

                    <div className="mt-20 w-full flex flex-wrap justify-around gap-4 text-center text-white font-theme-oxanium">
                        <VariousBadges />
                    </div>

                </div>
            </div>
        </>
    );
}