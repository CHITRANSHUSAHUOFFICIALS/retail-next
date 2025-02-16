"use client";
import Link from "next/link";
import React, { FC } from "react";

interface SidebarProps {
    children: React.ReactNode;
    isSidebarOpen?: boolean;
    toggleSidebar?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
    children,
    isSidebarOpen,
    toggleSidebar,
}) => {
    return (
        <aside
            className={`${
                isSidebarOpen
                    ? "translate-x-0 md:w-64"
                    : "-translate-x-full md:fixed md:w-0 md:-translate-x-60"
            } transition-all duration-300 fixed md:relative w-full h-screen z-40 bg-white border-r border-black-10 `}
        >
            <div className="flex flex-col h-full">
                <div className="px-4 md:px-6 py-4 border-b border-black-10 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex hi items-center space-x-3 rtl:space-x-reverse"
                    >
                        <div className="text-xl font-bold uppercase">
                            Retail App
                        </div>
                    </Link>
                    <button
                        className="text-text-secondary p-2"
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="overflow-y-auto">{children}</div>
            </div>
        </aside>
    );
};

export default Sidebar;
