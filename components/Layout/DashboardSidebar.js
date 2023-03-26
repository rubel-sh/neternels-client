import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { TbBrandAdobe } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiAzurefunctions, SiGoogletagmanager } from "react-icons/si";

import DashboardSidebarItem from "../ui/dashboardlayout/DashboardSidebarItem";

const DashboardSidebar = () => {
    const navLinks = [
        {
            icon: <AiFillAppstore />,
            title: "Dashboard",
            url: "/dashboard/dashboard",
        },
        {
            icon: <TbBrandAdobe />,
            title: "Add Brand",
            url: "/dashboard/addbrand",
        },
        {
            icon: <SiAzurefunctions />,
            title: "Release Kernel",
            url: "/dashboard/releasekernel",
        },
        {
            icon: <SiGoogletagmanager />,
            title: "Manage Devices",
            url: "/dashboard/managedevices",
        },
        {
            icon: <BsFillPeopleFill />,
            title: "Manage Developers",
            url: "/dashboard/managedevs",
        },
    ];
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
