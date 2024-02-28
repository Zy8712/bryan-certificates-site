import certificatesData from "../../certificates_data.json";

export default function RenderCertificates() {
    return (
        <>
            {certificatesData.map((image, index) => (
                <div className="w-[360px] h-[470px] flex flex-col mb-2 custom-sm:mb-0 rounded-md overflow-hidden cursor-pointer hover:custom-sm:scale-110 transition-all duration-500 ease-in-out">
                    <div className="w-full h-[278.16px] flex flex-col justify-center bg-light-gray">
                        <img
                            key={index}
                            src={image.preview_image}
                            alt=""
                            className="w-full"
                        />
                    </div>

                    <div className="relative w-full h-[191.84px] bg-gradient-to-b from-light-gray to-very-dark-blue text-center text-white font-theme-oxanium py-1">
                        <h3 className="mx-5 mt-2 font-bold text-xl">{image.name}</h3>
                        <p className="mt-1 font-semibold text-sm">Issue Date: {image.date}</p>
                        <p className="font-semibold text-sm">Issuer: {image.issuer} (via. {image.source})</p>
                        <div className="absolute bottom-2 w-full flex justify-between px-8">
                            <a href={image.links.source_link}
                                className="font-semibold text-sm"
                            >
                                Source Link
                            </a>
                            <a href={image.links.certificate_link}
                                className="font-semibold text-sm"
                            >
                                Certificate Link
                            </a>
                        </div>
                    </div>

                </div>
            ))}
        </>
    );
}