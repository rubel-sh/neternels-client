import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
    return (
        <SimpleGrid gridTemplateColumns="280px 1fr" h={"full"}>
            {/* 2ta column hobe */}
            {/* left sidebar */}
            {/* right dynamic content */}
            <GridItem>
                <DashboardSidebar />
            </GridItem>
            <GridItem>
                <Text fontSize={"4xl"} fontWeight={600} textAlign="center">
                    SideMenu
                </Text>
            </GridItem>
        </SimpleGrid>
    );
};

export default DashboardLayout;
