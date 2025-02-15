"use client";
import { deleteCookie } from "@/utils/helper";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
    const router = useRouter();
    const handleLogout = () => {
        deleteCookie("access_token");
        router.push("/");
    };
    return (
        <div>
            Dashboard <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
