import Header from "@/components/sharedComponents/Header";
import AuthProvider from "@/context/AuthProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/utils/theme";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

    return (
        <AuthProvider>
            <ChakraProvider theme={customTheme}>
                <Header />

                <Component {...pageProps} />
            </ChakraProvider>
        </AuthProvider>
    );
}
