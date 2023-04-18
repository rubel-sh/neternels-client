import useColors from "@/hooks/useColors";
import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export const CardText = ({ children }) => (
    <Text fontSize="clamp(16px,1vw,22px)" fontWeight={500}>
        {children}
    </Text>
);

export const DownloadBtn = ({ children }) => (
    <Link href="/download/ginkgo">
        <Button
            as={motion.button}
            whileTap={{ scale: 0.95 }}
            _hover={{ boxShadow: `-3px 3px #4C5DBB`, transform: "translate(3px,-3px)" }}
            bg={useColors().bodyBgColor}
            rounded="xl"
            width="100%"
            fontSize="clamp(18px ,1.5vw,25px)"
        >
            {children}
        </Button>
    </Link>
);

export const StatusText = ({ children }) => {
    return (
        <Text as="span" color={children === "Active" || "active" ? "green.600" : "red.600"}>
            {children}
        </Text>
    );
};

export const DashboardSectionTitle = ({ children }) => <Text fontSize="clamp(18px ,1.5vw,25px)">{children}</Text>;
