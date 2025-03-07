import axios from "axios";
import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function POST(request: Request) {
    try {
        const requestBody = await request.json();
        const response = await axios.post(
            `${BACKEND_URL}/public/login`,
            requestBody,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return NextResponse.json(response.data, { status: response.status });
    } catch (error: unknown) {
        console.error("API call error:", error);
        if (axios.isAxiosError(error)) {
            console.error("API call error:", error.response?.data);
            return NextResponse.json(
                error?.response?.data || { error: "Internal server error" },
                {
                    status: error.response?.status || 500,
                }
            );
        } else {
            return NextResponse.json(
                { error: "An unexpected error occurred." },
                { status: 500 }
            );
        }
    }
}
