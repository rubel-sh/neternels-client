import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
    const primaryColor = useColorModeValue("light.primaryColor", "dark.primaryColor");
    const bodyBgColor = useColorModeValue("light.bodyBgColor", "dark.bodyBgColor");
    const primaryTextColor = useColorModeValue("light.primaryTextColor", "dark.primaryTextColor");
    const backgroundSvgColor = useColorModeValue("light.backgroundSvgColor", "dark.backgroundSvgColor");
    return { primaryColor, bodyBgColor, primaryTextColor, backgroundSvgColor };
};

export default useColors;
