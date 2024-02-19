import { Link, Route, useLocation } from 'wouter';
import Space_Icon from "../../assets/icons/space-svgrepo-com.svg";

export default function Logo() {
    return (
        <>
            <Link to="/">
                <div className="h-24 flex items-center">
                    <img src={Space_Icon} className="h-full mr-3" />
                    <span className="text-white text-2xl font-semibold">
                        Bryan's Certificates
                    </span>
                </div>
            </Link>
        </>
    );
}