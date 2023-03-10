import PrimaryContainer from "@/components/widgets/PrimaryContainer";
import { Box, Button, GridItem, Image, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import pixel_phones from "@/assests/images/pixel_phones.png";
import { motion } from "framer-motion";
import useColors from "@/hooks/useColors";
import Link from "next/link";

const CardText = ({ children }) => (
    <Text fontSize="clamp(16px,1vw,22px)" fontWeight={500}>
        {children}
    </Text>
);

const DownloadBtn = ({ children }) => (
    <Link href="/download/ginkgo">
        <Button rounded="xl" width="100%" fontSize="clamp(18px ,1.5vw,25px)">
            {children}
        </Button>
    </Link>
);

const StatusText = ({ children }) => {
    return (
        <Text as="span" color={children === "Active" ? "green.600" : "red.600"}>
            {children}
        </Text>
    );
};

const Card = () => {
    const { colorMode } = useColorMode();
    return (
        <GridItem
            bg={useColors().CardBg}
            overflow="hidden"
            rounded={{ base: "3xl", md: "xl", lg: "3xl" }}
            border="2px solid transparent"
            transition="border 0.3s ease-out"
            _hover={{
                border: `2px solid rgb(2 74 217 / 50%)`,
            }}
            maxW="400px"
        >
            {/* Image */}
            <Box position="relative" isolation="isolate">
                {/* Behind Image Text */}
                <Text
                    position="absolute"
                    top="0"
                    left="50%"
                    transform="translateX(-50%)"
                    fontSize={{ base: "62px", md: "50px", lg: "72px" }}
                    fontWeight={700}
                    color={useColors().CardText}
                    zIndex="-1"
                >
                    NetErnels
                </Text>
                {/* Bottom Front Image Text  */}
                <Text
                    position="absolute"
                    bottom="2%"
                    left="50%"
                    transform="translateX(-50%)"
                    fontSize={{ base: "52px", md: "45px", lg: "48px" }}
                    fontWeight={800}
                    color={useColors().CardText}
                    zIndex="1"
                >
                    RAVEN
                </Text>
                {/* Overlay */}
                <Box
                    position="absolute"
                    w="full"
                    h="full"
                    bg={
                        colorMode === "light"
                            ? "linear-gradient(0deg, rgba(241,241,241,1) 0%, rgba(241,241,241,0.76) 33%, rgba(241,241,241,0) 100%);"
                            : "linear-gradient(0deg, rgba(22,26,34,1) 0%, rgba(22,26,34,0.76) 33%, rgba(22,26,34,0) 100%)"
                    }
                ></Box>
                <Image src={pixel_phones.src} width="full" />
            </Box>
            {/* Other Informations */}
            <Box px="clamp(20px ,1.5vw,25px)" py="clamp(5px, 2.5vw,15px)">
                {/* Device Name */}
                <Text fontSize="clamp(20px,3vw,28px)" fontWeight={700} mb="clamp(10px,1.5vw,15px)">
                    Google Pixel 6 Pro
                </Text>

                {/* Maintainer */}
                <CardText>Maintainer: Rubel Hossain</CardText>
                <CardText>Supports: Android 13</CardText>
                <CardText>Kernel Version: 4.13.203</CardText>
                <CardText>Last Update: 16 March 2023</CardText>
                <CardText>
                    Status: <StatusText>Active</StatusText>
                </CardText>
                <Box textAlign="center" w="full" mt="15px">
                    <DownloadBtn>Get Kernel</DownloadBtn>
                </Box>
            </Box>
        </GridItem>
    );
};

const CardsContainer = ({ devices }) => {
    return (
        <Box my="30px">
            <PrimaryContainer>
                <SimpleGrid
                    as={motion.grid}
                    gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
                    gap={{ base: "40px", md: "20px", lg: "40px" }}
                >
                    {devices?.map((device, i) => (
                        // Change key with device codename to device later
                        <Card key={i} />
                    ))}
                </SimpleGrid>
            </PrimaryContainer>
        </Box>
    );
};

export default CardsContainer;
