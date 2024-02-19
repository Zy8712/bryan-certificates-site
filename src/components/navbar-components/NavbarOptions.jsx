import { Link, Route, useLocation } from 'wouter';

export default function NavbarOptions() {

    const [location] = useLocation();

    return (
        <>
            <div className="w-[580px] h-12 flex justify-between items-center text-white text-lg font-semibold">
                <Link to="/featured" className="flex items-center">
                    <i className="las la-star text-2xl mr-2"></i>
                    Featured
                </Link>
                <Link to="/certificates" className="flex items-center">
                    <i className="las la-certificate text-2xl mr-1"></i>
                    Certificates
                </Link>
                <Link to="/credentials" className="flex items-center">
                    <i className="las la-id-badge text-2xl mr-1"></i>
                    Credentials
                </Link>
                <Link to="/badges" className="flex items-center">
                    <i className="las la-ribbon text-2xl mr-1"></i>
                    Badges
                </Link>
            </div>
        </>
    );
}