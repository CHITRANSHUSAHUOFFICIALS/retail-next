"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";
import { Cannabis, ChevronRight } from "lucide-react";

const sidebarOptions = [
    { name: "Home", image: "" },
    { name: "Shop by Category", image: "" },
    { name: "Sale & Discounts", image: "" },
    { name: "New Arrivals", image: "" },
    { name: "Favorites/ Wishlist", image: "" },
    { name: "My Orders", image: "" },
    { name: "Cart", image: "" },
    { name: "Stores Near You", image: "" },
    { name: "Gift Cards", image: "" },
    { name: "Customer Support", image: "" },
    { name: "Settings", image: "" },
    { name: "Profile", image: "" },
    { name: "Payment Methods", image: "" },
    { name: "Loyalty Program", image: "" },
];

const CommonLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    return (
        <div className="flex">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            >
                <div className="flex flex-col py-4">
                    {sidebarOptions.map((item, index) => (
                        <button
                            className="text-left flex font-medium justify-between gap-2 p-2 hover:border hover:bg-slate-200 rounded-md"
                            key={index}
                        >
                            <div className="flex items-center gap-2">
                                <Cannabis className="w-4" />
                                {item.name}
                            </div>
                            <ChevronRight className="self-end" />
                        </button>
                    ))}
                </div>
            </Sidebar>
            <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
                {children}
            </Navbar>
        </div>
    );
};

export default CommonLayoutWrapper;
