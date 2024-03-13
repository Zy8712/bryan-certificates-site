export default function CertificatesFilter({ activeFilter, toggleFilter }){

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

    return(
        <>
            <div className="h-12 w-full flex justify-center items-center">
                <div className="w-[550px] h-full flex justify-around items-center">
                    {renderFilters()}
                </div>
            </div>
        </>
    );
}
