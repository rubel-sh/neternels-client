import useColors from "@/hooks/useColors";
import { Box } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <Box as="body" bg={useColors().primaryTextColor} style={{ fontFamily: "'Poppins', sans-serif" }}>
                <Main />
                <NextScript />
            </Box>
        </Html>
    );
}
