import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../sharedComponents/Header";

const HomepageLayout = ({ children }) => {
    return (
        <Box as="main">
            <Header />
            {children}
        </Box>
    );
};

export default HomepageLayout;
