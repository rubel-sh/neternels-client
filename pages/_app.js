import AuthProvider from "@/context/AuthProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/utils/theme";
import { useRouter } from "next/router";
import HomepageLayout from "@/components/Layout/HomepageLayout";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import Header from "@/components/sharedComponents/Header";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const { pathname } = router;

    const decideLayout = () => {
        if (pathname.startsWith("/dashboard")) {
            return (
                <DashboardLayout>
                    <Component {...pageProps} />
                </DashboardLayout>
            );
        }

        return (
            <HomepageLayout>
                <Header />
                <Component {...pageProps} />
            </HomepageLayout>
        );
    };
    return (
        <AuthProvider>
            <ChakraProvider theme={customTheme}>{decideLayout()}</ChakraProvider>
        </AuthProvider>
    );
}
