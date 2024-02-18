import Space_Icon from "../assets/icons/space-svgrepo-com.svg";
import SocialIconsReduced from "./SocialIconsReduced";

export default function Navbar() {
    return (
        <>
            <div className="w-screen h-24 px-20 border-white border-2 border-solid">

                <div className="w-full h-full flex justify-between">
                    <div className="h-full flex items-center">
                        <img src={Space_Icon} className="h-full mr-3" />
                        <span className="text-white text-2xl font-semibold">
                            Bryan's Certificates
                        </span>
                    </div>

                    <div className="w-48 h-full flex justify-between items-center">
                        <SocialIconsReduced />
                    </div>

                </div>

            </div>
        </>
    );
}