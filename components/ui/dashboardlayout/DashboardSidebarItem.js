import useColors from "@/hooks/useColors";
import { Box, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DashboardSidebarItem = ({ link }) => {
    const { icon, title, url } = link;
    const router = useRouter();
    return (
        <div onClick={() => router.push(url)}>
            <Box
                cursor="pointer"
                as={motion.div}
                whileHover={{ scale: 1.05, backgroundColor: "#087DA431" }}
                whileTap={{ scale: 0.95 }}
                w="full"
                gap="1.1rem"
                display="flex"
                alignItems="center"
                py="4"
                px="2"
                mt={0}
                position="relative"
                _after={{
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    right: "5px",
                    transform: "translateY(-50%)",
                    height: "60%",
                    width: "3px",
                    bg: useColors().primaryColor,
                    rounded: "lg",
                }}
            >
                <Box fontSize="2xl" textColor={useColors().primaryColor}>
                    {icon}
                </Box>
                <Text>{title}</Text>
                {title === "Kernel Requests" && <NewCount>20</NewCount>}
            </Box>
        </div>
    );
};

const NewCount = ({ children }) => (
    <Box bg="#087DA431" w={7} h={7} display="grid" placeItems="Center" rounded="md">
        <Text color={useColors().primaryColor}>{children}</Text>
    </Box>
);

export default DashboardSidebarItem;
