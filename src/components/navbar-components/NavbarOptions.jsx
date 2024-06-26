import { Link, useLocation } from 'wouter';

export default function NavbarOptions() {

    const [location] = useLocation();

    return (
        <>
            <div className="w-[200px] custom-xl:w-[580px] h-12 flex justify-between items-center text-white text-lg font-semibold">
                <Link to="/featured" className={`flex items-center hover:text-teal-400 ${location === '/featured' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-star text-4xl custom-xl:text-2xl mr-2"></i>
                    <span className={`hidden custom-xl:inline ${location === '/featured' ? 'underline underline-offset-8' : ''}`}>Featured</span>
                </Link>
                <Link to="/certificates" className={`flex items-center hover:text-teal-400 ${location === '/certificates' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-certificate text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/certificates' ? 'underline underline-offset-8' : ''}`}>Certificates</span>
                </Link>
                <Link to="/credentials" className={`flex items-center hover:text-teal-400 ${location === '/credentials' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-id-badge text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/credentials' ? 'underline underline-offset-8' : ''}`}>Credentials</span>
                </Link>
                <Link to="/badges" className={`flex items-center hover:text-teal-400 ${location === '/badges' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-ribbon text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/badges' ? 'underline underline-offset-8' : ''}`}>Badges</span>
                </Link>
            </div>
        </>
    );
}