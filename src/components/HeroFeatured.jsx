import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

import BigDataCognitiveClass from "../assets/credential-images/Big_Data_Found_Level_1.png";
import CybersecurityFundamentalsIBM from "../assets/credential-images/Cybersecurity_Fundamentals_IBMSkillsBuild.png";
import ProjectManagementFundamentalsIBM from "../assets/credential-images/Project_Management_Fundamentals_IBMSkillsBuild.png";
import DataToolsCognitiveClass from "../assets/credential-images/Data_Science_Tools.png";
import ProfessionalSkillsIBM from "../assets/credential-images/Working_in_a_Digital_World-_Professional_Skills_IBMSkillsBuild.png";
import ExploreEmergingTechIBM from "../assets/credential-images/Explore_Emerging_Tech_IBMSkillsBuild.png"
import WebDevFundamentalsIBM from "../assets/credential-images/Web_Development_Fundamentals_IBMSkillsBuild.png";
import AgileExplorerIBM from "../assets/credential-images/Agile_Explorer_IBMSkillsBuild.png";
import CE_C_and_PD_IBM from "../assets/credential-images/Customer_Engagement-_Communication_and_Personality_Dynamics_IBMSkillsBuild.png";
import DataFundamentalsIBM from "../assets/credential-images/Data_Fundamentals_IBMSkillsBuild.png";
import AIFundamentalsIBM from "../assets/credential-images/Artificial_Intelligence_Fundamentals_IBMSkillsBuild.png";
import CE_PS_and_PC_IBM from "../assets/credential-images/Customer_Engagement-_Problem_Solving_and_Process_Controls_IBMSkillsBuild.png";
import InfoTechFundamentalsIBM from "../assets/credential-images/Information_Technology_Fundamentals_IBMSkillsBuild.png";
import EffectiveMentoringIBM from "../assets/credential-images/Foundations_in_Effective_Mentoring_IBMSkillsBuild.png";

// Dummy images
const images = [
    BigDataCognitiveClass,
    CybersecurityFundamentalsIBM,
    ProjectManagementFundamentalsIBM,
    DataToolsCognitiveClass,
    ProfessionalSkillsIBM,
    ExploreEmergingTechIBM,
    WebDevFundamentalsIBM,
    AgileExplorerIBM,
    CE_C_and_PD_IBM,
    DataFundamentalsIBM,
    AIFundamentalsIBM,
    CE_PS_and_PC_IBM,
    InfoTechFundamentalsIBM,
    EffectiveMentoringIBM,
];

export default function HeroFeatured() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showNavigation, setShowNavigation] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const navigateTo = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="w-full flex justify-center mt-10">
            <div className="relative w-1/2 h-96 rounded-md">
                {images.map((image, index) => (
                    <Transition
                        key={index}
                        show={currentImageIndex === index}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-1000"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="absolute inset-0 flex justify-center"
                    >
                        <img
                            src={image}
                            alt={`Carousel Image ${index}`}
                            className="rounded-md"
                        />
                    </Transition>
                ))}

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            onClick={() => navigateTo(index)}
                        />
                    ))}
                </div>

                <div
                    className="absolute inset-y-0 flex items-center justify-between w-full px-4"
                    onMouseEnter={() => setShowNavigation(true)}
                    onMouseLeave={() => setShowNavigation(false)}
                >
                    {showNavigation && (
                        <>
                            <button
                                onClick={() =>
                                    setCurrentImageIndex(
                                        (currentImageIndex - 1 + images.length) % images.length
                                    )
                                }
                                className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 focus:outline-none"
                            >
                                left
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentImageIndex((currentImageIndex + 1) % images.length)
                                }
                                className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 focus:outline-none"
                            >
                                right
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
