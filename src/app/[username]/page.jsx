"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/HomePg/Navbar.jsx";
import Userdata from "@/components/HomePg/Userdata";
import { useSelector } from "react-redux";
import Image from "next/image";

const Page = ({ params }) => {
    const userDetails = useSelector((state) => state.user.user);
    const [activeNav, setActiveNav] = useState("POSTS")

    const GridIcon = ({ size = 18, color = "currentColor" }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                role="img"
            >
                <path
                    d="M18 18V2H2V18H18Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M18 6H22V22H6V18"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.9998 7H13.0088"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
            </svg>
        );
    };

    const CameraVideoIcon = ({ size = 20, color = "currentColor" }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                role="img"
            >
                <path
                    d="M4.5 21.5L8.5 17.5M10.5 17.5L14.5 21.5M9.5 17.5L9.5 22.5"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M17 17.5V7.5H2V17.5H17Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M17 10.5002L22 8.00015V17L17 14.5002"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <circle
                    cx="12.5"
                    cy="5"
                    r="2.5"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <circle
                    cx="7"
                    cy="4.5"
                    r="3"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </svg>
        );
    };

    const navComp = [
        { name: "POSTS", icon: <GridIcon /> },
        { name: "FILMS", icon: <CameraVideoIcon /> },
    ];

    return (
        <div>
            <Navbar />
            {userDetails ? (
                <div className="flex flex-col items-center justify-center h-full p-20 ">
                    <Userdata />
                    <div className="w-[75%] border mt-20 "></div>
                    <div className="flex justify-center items-center space-x-32 relative w-full ">
                        {navComp.map((nav) => (
                            <div key={nav.name} className="flex flex-col text-neutral-500 items-center space-y-5 ">
                                <div
                                    className={` h-[1px] w-[120%] bg-neutral-500 transition-all duration-300 ${activeNav === nav.name ? "block" : "hidden"}`}
                                ></div>
                                <button
                                    className={`transition-all duration-300 text-[14px] flex items-center space-x-2 ${activeNav === nav.name ? "text-black" : "text-neutral-500"} `}
                                    onClick={() => setActiveNav(nav.name)}
                                >
                                    {nav.icon}
                                    <span>
                                        {nav.name}
                                    </span>
                                </button>
                            </div>
                        )
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading user info...</p>
            )}
        </div>
    );
};

export default Page;
