"use client";
import { deleteCookie } from "@/utils/helper";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface NavbarProps {
    children: React.ReactNode;
    isSidebarOpen?: boolean;
    toggleSidebar?: () => void;
}

const Navbar: FC<NavbarProps> = ({
    children,
    toggleSidebar,
    isSidebarOpen,
}) => {
    const router = useRouter();
    const handleLogout = () => {
        deleteCookie("access_token");
        router.push("/");
    };
    return (
        <nav className="bg-white w-full z-20 border-b border-gray-200 sticky top-0">
            <div
                className={`px-6 ${
                    isSidebarOpen ? "justify-end" : "justify-between"
                } flex items-center border-b border-gray-200 h-full max-h-[73px] py-4`}
            >
                <div className={`flex w-full ${isSidebarOpen && "hidden"}`}>
                    <button
                        className=" text-text-secondary p-2"
                        onClick={toggleSidebar}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <div className="text-xl font-bold uppercase">
                            Retail App
                        </div>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <button
                        onClick={handleLogout}
                        className="hover:text-red-500 items-center hover:bg-red-50 transition-all duration-200 ease-in-out p-1 rounded-md flex gap-2"
                    >
                        <LogOut />
                    </button>
                </div>
            </div>
            {children}
        </nav>
    );
};

export default Navbar;
