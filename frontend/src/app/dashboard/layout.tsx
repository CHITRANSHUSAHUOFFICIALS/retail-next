import { ToastProvider } from "@/context/toast-context";
import CommonLayoutWrapper from "@/components/common-layout-wrapper/common-layout-wrapper";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ToastProvider>
                <CommonLayoutWrapper>{children}</CommonLayoutWrapper>
            </ToastProvider>
        </div>
    );
}
