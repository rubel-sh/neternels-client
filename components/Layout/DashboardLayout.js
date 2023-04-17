import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Component } from "react";
import DashboardSidebar from "../sharedComponents/DashboardSidebar";
import { AiFillAppstore } from "react-icons/ai";
import { TbBrandAdobe } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiMessageAdd } from "react-icons/bi";
import { SiAzurefunctions, SiGoogletagmanager } from "react-icons/si";
import AddBrand from "@/pages/dashboard/addbrand";
import Header from "../sharedComponents/Header";

const DashboardLayout = ({ children }) => {
    const navLinks = [
        {
            icon: <AiFillAppstore />,
            title: "Dashboard",
            url: "/dashboard/",
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
            icon: <BiMessageAdd />,
            title: "Kernel Requests",
            url: "/dashboard/kernelrequests",
        },
        {
            icon: <BsFillPeopleFill />,
            title: "Manage Developers",
            url: "/dashboard/managedevs",
        },
    ];
    return (
        <>
            <Header />
            <SimpleGrid gridTemplateColumns="280px 1fr" h={"full"}>
                <GridItem>
                    <DashboardSidebar navLinks={navLinks} />
                </GridItem>
                <GridItem>
                    <Box fontSize={"4xl"} fontWeight={600} textAlign="center" px={4} py="5">
                        {children}
                    </Box>
                </GridItem>
            </SimpleGrid>
        </>
    );
};

export default DashboardLayout;
