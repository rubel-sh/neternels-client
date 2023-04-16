import PrimaryContainer from "@/components/widgets/PrimaryContainer";
import { Box, Button, GridItem, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import mobileWithCase from "@/assests/images/mobileWithCase.png";
import Head from "next/head";
import { motion } from "framer-motion";
import { BsTelegram, BsGithub } from "react-icons/bs";
import useColors from "@/hooks/useColors";
import Link from "next/link";
import useBorders from "@/hooks/useBorders";
import KernelChangelogsAccordion from "@/components/ui/download/KernelChangelogsAccordion";
import HomepageLayout from "@/components/Layout/HomepageLayout";

const HeadingTitle = ({ children }) => (
    <Text fontSize="clamp(1.1rem,2vw,1.6rem)" fontWeight={700} borderLeft="2px solid #5c5eeae8" pl="10px">
        {children}
    </Text>
);
const DescContainer = ({ children }) => (
    <VStack
        rounded="3xl"
        alignItems="flex-start"
        mt="clamp(1rem,2vw,1.5rem)"
        px="30px"
        py="25px"
        bg={useColors().CardBg}
        rowGap="8px"
    >
        {children}
    </VStack>
);
const DeviceInfoContainer = ({ children }) => (
    <SimpleGrid
        gridTemplateColumns="1fr 1fr"
        bg={useColors().bodyBgColor}
        w="full"
        justifyItems="center"
        rounded="3xl"
        alignItems="flex-start"
        px="20px"
        py="25px"
        gap="clamp(10px,2vw,30px)"
        textAlign="center"
    >
        {children}
    </SimpleGrid>
);
const DescTitle = ({ children }) => (
    <Text fontSize="clamp(0.9rem,1.5vw,0.9rem)" fontWeight={300} color={useColors().descTitle} lineHeight="100%">
        {children}
    </Text>
);
const DescText = ({ children }) => (
    <Text fontSize="clamp(1rem,2vw,1.2rem)" fontWeight={600}>
        {children}
    </Text>
);
const DeviceInfoText = ({ children }) => (
    <Text fontSize="clamp(0.8rem,2vw,1rem)" fontWeight={500} mt="5px">
        {children}
    </Text>
);

const Status = ({ children, active }) => (
    <Text fontSize="clamp(1.2rem,2vw,2rem)" fontWeight={600} lineHeight="100%" color={active ? "green.600" : "red.600"}>
        {children}
    </Text>
);

const DeviceDetails = () => {
    return (
        <>
            <Head>
                <title>NetErnels - Google Pixel 6 Pro</title>
                <meta name="description" content="neternels kernel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomepageLayout>
                <Box my="clamp(10px,3vw,40px)">
                    <PrimaryContainer>
                        {/* Create three column , left device info, center image, right changelog */}
                        <SimpleGrid
                            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3,1fr)" }}
                            rowGap="1rem"
                            columnGap={{ md: "2rem", lg: "10px" }}
                        >
                            {/* Left Container */}
                            <GridItem order={{ base: 2, md: 2, lg: 1 }}>
                                {/* <HeadingTitle>Device Information</HeadingTitle> */}
                                <DescContainer>
                                    <Box>
                                        <DescTitle>Brand </DescTitle>
                                        <DescText>Google</DescText>
                                    </Box>
                                    <Box>
                                        <DescTitle>Model</DescTitle>
                                        <DescText>Google Pixel 6 Pro</DescText>
                                    </Box>
                                    <Box>
                                        <DescTitle>Codename</DescTitle>
                                        <DescText>Raven</DescText>
                                    </Box>
                                    <DeviceInfoContainer>
                                        <Box>
                                            <DescTitle>Chipset</DescTitle>
                                            <DeviceInfoText>Google Tensor</DeviceInfoText>
                                        </Box>
                                        <Box>
                                            <DescTitle>RAM</DescTitle>
                                            <DeviceInfoText>
                                                12<small>GB</small>
                                            </DeviceInfoText>
                                        </Box>
                                        <Box>
                                            <DescTitle>Released</DescTitle>
                                            <DeviceInfoText>Oct 21, 2021</DeviceInfoText>
                                        </Box>
                                        <Box>
                                            <DescTitle>Battery</DescTitle>
                                            <DeviceInfoText>
                                                5003<small>mAh</small>
                                            </DeviceInfoText>
                                        </Box>
                                    </DeviceInfoContainer>
                                </DescContainer>
                            </GridItem>
                            {/* Center Container */}
                            <GridItem
                                colSpan={{ md: 2, lg: 1 }}
                                order={{ base: 1, md: 1, lg: 2 }}
                                justifySelf="center"
                                alignSelf="center"
                            >
                                <VStack>
                                    <Image
                                        as={motion.img}
                                        initial={{ scale: 0.95 }}
                                        whileHover={{ scale: 1 }}
                                        src={mobileWithCase.src}
                                        width="80%"
                                    />
                                    <Link href="/download/ginkgo">
                                        {/* <Button
                                        as={motion.button}
                                        whileTap={{ scale: 0.95 }}
                                        _hover={{ boxShadow: `-3px 3px #087ea4`, transform: "translate(3px,-3px)" }}
                                        bg={useColors().bodyBgColor}
                                        rounded="xl"
                                        width="100%"
                                        fontSize="clamp(18px ,1.5vw,25px)"
                                        border={useBorders().cardBorder}
                                    >
                                        Download
                                    </Button> */}
                                    </Link>
                                </VStack>
                            </GridItem>
                            {/* Right Container */}
                            <GridItem order={{ base: 3, md: 3, lg: 3 }}>
                                {/* <HeadingTitle>Kernel Information</HeadingTitle> */}
                                <DescContainer>
                                    <Box>
                                        <DescTitle>Status</DescTitle>
                                        <Status active={true}>Active</Status>
                                    </Box>
                                    <Box w="full">
                                        <DescTitle>Maintainer</DescTitle>
                                        <HStack justifyContent="space-between" w="full">
                                            <DescText>Rubel Hossain</DescText>
                                            {/* Social Links */}
                                            <HStack fontSize="1.5rem" columnGap="15px">
                                                <Link href="#">
                                                    <BsTelegram />
                                                </Link>
                                                <Link href="#">
                                                    <BsGithub />
                                                </Link>
                                            </HStack>
                                        </HStack>
                                    </Box>
                                    <Box>
                                        <DescTitle>Supports</DescTitle>
                                        <DescText>Android 13</DescText>
                                    </Box>
                                    <Box>
                                        <DescTitle>Kernel Version</DescTitle>
                                        <DescText>4.14.690</DescText>
                                    </Box>
                                    <Box>
                                        <DescTitle>Last Build</DescTitle>
                                        <DescText>14 February 2023</DescText>
                                    </Box>
                                    <Box w="full">
                                        <DescTitle>Support Groups</DescTitle>
                                        <HStack justifyContent="space-between" w="full">
                                            <DescText>Telegram</DescText>
                                            <Link href="#">
                                                <BsTelegram fontSize="1.5rem" />
                                            </Link>
                                        </HStack>
                                    </Box>
                                </DescContainer>
                            </GridItem>
                        </SimpleGrid>
                        <SimpleGrid
                            mt="1rem"
                            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                            rowGap="1rem"
                            columnGap={{ md: "2rem", lg: "30px" }}
                        >
                            {/* Change Logs */}
                            <GridItem>
                                <DescContainer>
                                    <DescText>Kernel Changelogs</DescText>
                                    <KernelChangelogsAccordion />
                                </DescContainer>
                            </GridItem>
                            {/* Comments */}
                            <GridItem>
                                <DescContainer>
                                    <DescText>Comments</DescText>
                                    <Text fontSize="4xl" fontWeight={500}>
                                        COMING SOON
                                    </Text>
                                </DescContainer>
                            </GridItem>
                        </SimpleGrid>
                    </PrimaryContainer>
                </Box>
            </HomepageLayout>
        </>
    );
};

export default DeviceDetails;
