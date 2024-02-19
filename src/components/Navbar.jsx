import Logo from "./navbar-components/Logo";
import NavbarOptions from "./navbar-components/NavbarOptions";
import SocialIconsReduced from "./navbar-components/SocialIconsReduced";

export default function Navbar() {
    return (
        <>
            <div className="absolute z-50 w-screen h-24 px-16 bg-white bg-opacity-15 font-theme-orbitron">

                <div className="w-full h-full flex justify-between items-center">

                    <Logo />

                    <NavbarOptions />

                    <SocialIconsReduced />

                </div>

            </div>
        </>
    );
}