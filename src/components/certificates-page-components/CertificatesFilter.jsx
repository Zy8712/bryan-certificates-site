import { useState } from "react";

export default function CertificatesFilter({ activeFilter, toggleFilter }) {

    const filterOptions = [
        { iconClass: "las la-expand", filterText: "All" },
        { iconClass: "las la-star", filterText: "Featured" },
        { iconClass: "lab la-linkedin", filterText: "LinkedIn" },
        { iconClass: "lab la-microsoft", filterText: "Microsoft" },
        { iconClass: "las la-shapes", filterText: "Other" },
    ];

    const renderFilters = () => {
        return filterOptions.map((filter, index) => (
            <>
                <button aria-label={`${filter.filterText} Filter Option`} onClick={() => toggleFilter(index)}
                    className={`px-3 h-9 flex items-center text-white font-medium border-white border-2 border-solid rounded-md ${activeFilter == (index) ? 'bg-gradient-to-tr from-blue-400 to-teal-400' : ''}`}>
                    <i className={`${filter.iconClass} mr-1 text-lg`}></i>
                    {filter.filterText}
                </button>
            </>
        ));
    };


    const renderToggleOptions = () => {
        const option = filterOptions[activeFilter];
        return (
            <>
                <span className="w-full h-full">
                    <i className={`${option.iconClass} mr-1 text-lg`}></i>
                    {option.filterText}
                </span>
            </>
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const toggleMobileFilter = () => {
        setCurrentIndex(currentIndex === 3 ? 0 : currentIndex + 1);
        toggleFilter(currentIndex);
    };

    return (
        <>
            <div className="h-12 w-full flex justify-center items-center">
                <div className="w-[550px] h-full hidden sm:flex justify-around items-center">
                    {renderFilters()}
                </div>
                <div className="w-64 h-9 flex sm:hidden justify-between items-center text-white text-base font-medium font-theme-oxanium">
                    <span className="w-36 h-full flex justify-center items-center">Filter Selected: </span>
                    <button onClick={toggleMobileFilter} className="w-28 h-full bg-gradient-to-tr from-blue-400 to-teal-400 hover:border-2 border-white border-solid border-0 rounded-md">
                        {renderToggleOptions()}
                    </button>
                </div>
            </div>
        </>
    );
}
