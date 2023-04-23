import { Box, GridItem, Image, Text, useColorMode } from "@chakra-ui/react";
import pixel_phones from "@/assests/images/pixel_phones.png";
import useColors from "@/hooks/useColors";
import useBorders from "@/hooks/useBorders";
import Tilt from "react-parallax-tilt";
import { CardText, DownloadBtn, StatusText } from "@/components/styledComponents/stylesComponents";

const Card = ({ device }) => {
    const { colorMode } = useColorMode();
    const { codename, model, maintainer, supports, kernelVersion, updatedAt, status } = device;
    return (
        <GridItem>
            {/* <Tilt
                perspective={1200}
                gyroscope={true}
                glareEnable={false}
                glareMaxOpacity={0}
                glareBorderRadius={"30px"}
                tiltReverse={true}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                transitionSpeed={300}
            > */}
            <Box
                bg={useColors().CardBg}
                overflow="hidden"
                rounded={{ base: "3xl", md: "xl", lg: "3xl" }}
                border="2px solid transparent"
                transition="border 0.3s ease-out"
                _hover={{
                    border: useBorders().cardBorder,
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
                        {codename}
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
                        {model}
                    </Text>

                    {/* Maintainer */}
                    <CardText>Maintainer: {maintainer}</CardText>
                    <CardText>Supports: Android {supports}</CardText>
                    <CardText>Kernel Version: {kernelVersion}</CardText>
                    <CardText>
                        Last Update:{" "}
                        {new Date(updatedAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </CardText>
                    <CardText>
                        Status: <StatusText>{status ? "Active" : "Inactive"}</StatusText>
                    </CardText>
                    <Box textAlign="center" w="full" mt="15px">
                        <DownloadBtn>Get Kernel</DownloadBtn>
                    </Box>
                </Box>
            </Box>
            {/* </Tilt> */}
        </GridItem>
    );
};

export default Card;
