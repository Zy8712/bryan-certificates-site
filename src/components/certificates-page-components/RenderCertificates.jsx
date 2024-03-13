import { useState, useEffect, useRef } from 'react';
import certificatesData from "./certificates_data.json";
import featuredCertificatesData from "./certificates-filter-data/featured_certificates_data.json";
import linkedinCertificatesData from "./certificates-filter-data/linkedin_certificates_data.json";
import microsoftCertificatesData from "./certificates-filter-data/microsoft_certificates_data.json";
import otherCertificatesData from "./certificates-filter-data/other_certificates_data.json";

export default function RenderCertificates({ activeFilter }) {
    const [visibleCertificates, setVisibleCertificates] = useState([]);
    const [loadedCertificates, setLoadedCertificates] = useState(12); // Initial number of loaded certificates
    const [isFetching, setIsFetching] = useState(false);

    const observer = useRef();

    const selectedData = getData(activeFilter);

    function getData(activeFilter) {
        switch (activeFilter) {
            case 0:
                return certificatesData;
            case 1:
                return featuredCertificatesData;
            case 2:
                return linkedinCertificatesData;
            case 3:
                return microsoftCertificatesData;
            case 4:
                return otherCertificatesData;
            default:
                return [];
        }
    }

    useEffect(() => {
        setVisibleCertificates(selectedData.slice(0, loadedCertificates));
    }, [loadedCertificates, activeFilter]);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                if (firstEntry && firstEntry.isIntersecting) {
                    setIsFetching(true);
                }
            },
            { threshold: 0.5 }
        );
    }, []);

    useEffect(() => {
        if (!isFetching) return;

        if (loadedCertificates >= selectedData.length) {
            setIsFetching(false);
            return;
        }

        // Load additional certificates
        const additionalCertificates = selectedData.slice(
            loadedCertificates,
            loadedCertificates + 6 // Load 6 more certificates
        );

        setVisibleCertificates((prevCertificates) => [
            ...prevCertificates,
            ...additionalCertificates,
        ]);
        setLoadedCertificates((prevLoadedCertificates) => prevLoadedCertificates + 6);
        setIsFetching(false);
    }, [isFetching, loadedCertificates, selectedData]);

    useEffect(() => {
        if (!observer.current) return;

        observer.current.disconnect();

        const target = document.querySelector('.last-visible-card');
        if (target) {
            observer.current.observe(target);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [visibleCertificates]);

    return (
        <>
            {visibleCertificates.map((image, index) => (
                <div key={index} className={`w-[360px] h-[470px] flex flex-col mb-2 custom-sm:mb-0 rounded-md overflow-hidden cursor-pointer hover:custom-sm:scale-110 transition-all duration-500 ease-in-out ${index === visibleCertificates.length - 1 ? 'last-visible-card' : ''}`}>
                    <div className="w-full h-[278.16px] flex flex-col justify-center bg-light-gray">
                        <img
                            src={image.preview_image}
                            alt=""
                            className="w-full"
                        />
                    </div>

                    <div className="relative w-full h-[191.84px] bg-gradient-to-b from-light-gray to-very-dark-blue text-center text-white font-theme-oxanium py-1">
                        <h3 className="mx-7 mt-2 font-bold text-xl">{image.name}</h3>
                        <p className="mt-1 font-semibold text-sm">Issue Date: {image.date}</p>
                        <p className="font-semibold text-sm">Issuer: {image.issuer} (via {image.source})</p>

                        <button className="absolute top-0 right-0 w-7 h-7 flex justify-center items-center rounded-full">
                            <a href={image.links.source_link} target="__blank" rel="noopener noreferrer">
                                <i className="las la-info-circle text-xl hover:text-teal-400"></i>
                            </a>
                        </button>

                        <div className="absolute bottom-3 w-full flex justify-between px-5 font-semibold text-sm">
                            <span>Certificates:</span>

                            <p className="w-full flex justify-between ml-5 underline underline-offset-2">
                                <a href={image.links.certificate_link} className="hover:text-teal-400">
                                    Main Ver.
                                </a>

                                <a href={image.links.pmi_link} className={`${image.links.pmi_link !== '' ? 'inline' : 'hidden'} hover:text-teal-400 `}>
                                    PMI Ver.
                                </a>

                                <a href={image.links.nasba_link} className={`${image.links.nasba_link !== '' ? 'inline' : 'hidden'} hover:text-teal-400`}>
                                    NASBA Ver.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            {isFetching && <div>Loading...</div>}
        </>
    );
}
