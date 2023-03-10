import PrimaryContainer from "@/components/widgets/PrimaryContainer";
import useColors from "@/hooks/useColors";
import useFontSize from "@/hooks/useFontSize";
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";

const KernelsDeveloped = () => {
    const { colorMode } = useColorMode();
    const devices = ["Xiaomi", "Nokia", "Samsung", "Asus", "OnePlus", "Motorola"];
    return (
        <Box
            bg={
                colorMode === "light"
                    ? "linear-gradient(180deg, rgba(237,237,237,1) 0%, rgba(255,255,255,1) 100%)"
                    : "linear-gradient(180deg, rgba(24,24,35,1) 0%, rgba(26,32,44,1) 100%)"
            }
            py={{ base: "80px", lg: "60px" }}
            mt={{ base: "0", md: "0px" }}
        >
            <PrimaryContainer>
                <Box
                    rounded={"3xl"}
                    p={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                    bg={useColors().bodyBgColor}
                    boxShadow={"rgba(17, 12, 46, 0.1) 0px 48px 100px 0px;"}
                    textAlign="center"
                    maxW={"900px"}
                    mx="auto"
                >
                    <Text fontSize={useFontSize().dlkernel} fontWeight={"700"} lineHeight={"normal"}>
                        Download NetErnels
                    </Text>
                    <Flex
                        justifyContent={"center"}
                        mt={{ base: "1.2rem", lg: "2rem" }}
                        gap={{ base: "0.8rem", lg: "1.2rem" }}
                        flexWrap="wrap"
                    >
                        {devices?.map((device) => (
                            <Button
                                px="25px"
                                py="10px"
                                border={"2px solid"}
                                borderColor={useColors().primaryColor}
                                color={useColors().primaryColor}
                                rounded="2xl"
                                cursor={"pointer"}
                                transition="all 0.3s ease"
                                fontSize={"medium"}
                                _hover={{
                                    bg: useColors().primaryColor,
                                    color: useColors().primaryTextColor,
                                }}
                            >
                                {device}
                            </Button>
                        ))}
                    </Flex>
                </Box>
            </PrimaryContainer>
        </Box>
    );
};

export default KernelsDeveloped;
