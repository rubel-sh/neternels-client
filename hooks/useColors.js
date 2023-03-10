import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
    const primaryColor = useColorModeValue("light.primaryColor", "dark.primaryColor");
    const bodyBgColor = useColorModeValue("light.bodyBgColor", "dark.bodyBgColor");
    const primaryTextColor = useColorModeValue("light.primaryTextColor", "dark.primaryTextColor");
    const backgroundSvgColor = useColorModeValue("light.backgroundSvgColor", "dark.backgroundSvgColor");
    const CardBg = useColorModeValue("light.CardBg", "dark.CardBg");
    const CardText = useColorModeValue("light.CardText", "dark.CardText");
    return { primaryColor, bodyBgColor, primaryTextColor, backgroundSvgColor, CardBg, CardText };
};

export default useColors;
