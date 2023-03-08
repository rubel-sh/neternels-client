import PrimaryContainer from "@/components/widgets/PrimaryContainer";
import useFontSize from "@/hooks/useFontSize";
import heroImage from "@/assests/logo/header_logo_light.png";
import { Box, Button, Flex, Grid, GridItem, Image, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import useColors from "@/hooks/useColors";
import PrimaryButton from "@/components/widgets/PrimaryButton";
import HeroBackgroundSvg from "@/assests/svg/HeroBackgroundSvg";

const HeroSection = () => {
    const { colorMode } = useColorMode();
    return (
        <Box position={"relative"} py={{ base: "3rem", lg: "5rem" }}>
            <PrimaryContainer>
                <Flex alignItems={"center"} flexDirection={{ base: "column-reverse", md: "row" }}>
                    {/* Text contents */}
                    <Box>
                        <Text color={useColors().primaryColor} fontWeight={"500"}>
                            WHO ARE WE?
                        </Text>
                        <Text fontSize={useFontSize().headings} fontWeight={"700"} lineHeight={"normal"}>
                            Kernel Developers.
                        </Text>
                        <Text fontWeight={"normal"} mr={{ lg: "5rem" }}>
                            We are a group of people <where></where> make Nethunter kernels for devices which are
                            unmaintained, having bad Power Management or not having Nethunter Kernel at all.
                        </Text>
                        <Box mt={{ base: "1.2rem", md: "2rem" }} transform={"auto"} skewX={"-5deg"}>
                            <PrimaryButton>Browse Now</PrimaryButton>
                        </Box>
                    </Box>
                    {/* Image content */}
                    <Box>
                        <Image src={heroImage.src} width={{ base: "70%", md: "80%", lg: "60%" }} mx="auto" />
                    </Box>
                </Flex>
            </PrimaryContainer>
            <Box position={"absolute"} bottom="0" left="0" right="0" zIndex="-1">
                <HeroBackgroundSvg color={useColors().backgroundSvgColor} />
            </Box>
        </Box>
    );
};

export default HeroSection;
