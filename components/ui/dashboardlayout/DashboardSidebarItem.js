import useColors from "@/hooks/useColors";
import { Box, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const DashboardSidebarItem = ({ link }) => {
    const { icon, title, url } = link;
    return (
        <Link href={url}>
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
            </Box>
        </Link>
    );
};

export default DashboardSidebarItem;
