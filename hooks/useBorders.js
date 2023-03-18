import { useColorModeValue } from "@chakra-ui/react";

const useBorders = () => {
    const cardBorder = useColorModeValue("2px solid #087DA4B2", "2px solid #087DA4B2");
    return { cardBorder };
};

export default useBorders;
