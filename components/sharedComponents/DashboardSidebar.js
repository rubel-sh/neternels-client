import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

import DashboardSidebarItem from "../ui/dashboardlayout/DashboardSidebarItem";

const DashboardSidebar = ({ navLinks }) => {
    return (
        <Box bg={"#0A0A0A10"} minH="85vh" p="1rem">
            <Text fontSize={26} fontWeight={600}>
                DASHBOARD
            </Text>
            <Flex flexDirection={"column"} mt="5">
                {navLinks.map((link) => (
                    <DashboardSidebarItem key={link.url} link={link} />
                ))}
            </Flex>
        </Box>
    );
};

export default DashboardSidebar;
