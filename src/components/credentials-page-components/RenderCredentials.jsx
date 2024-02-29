import credentialData from "../../credentials_data.json";

export default function RenderCredentials() {
    return (
        <>
            {credentialData.map((image, index) => (
                <div className="w-[360px] h-36 flex justify-between bg-gradient-to-b from-light-gray to-very-dark-blue rounded-md overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out">
                    <img
                        key={index}
                        src={image.preview_image}
                        alt=""
                        className="h-full"
                    />
                    <div className="relative w-full h-full text-center text-white font-theme-oxanium p-1">
                        <h3 className="font-bold text-base">{image.name}</h3>
                        <p className="mt-1 font-semibold text-xs">Issue Date: {image.date}</p>
                        <p className="font-semibold text-xs">Issuer: {image.issuer} (via {image.source})</p>
                        <div className="absolute bottom-1 w-full flex justify-between px-3">
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