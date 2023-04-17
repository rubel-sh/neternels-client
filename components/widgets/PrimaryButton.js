import useColors from "@/hooks/useColors";
import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ children, type }) => {
    return (
        <Button
            color={useColors().primaryColor}
            border={`2px solid `}
            borderColor={useColors().primaryColor}
            px={{ base: "2rem" }}
            rounded={0}
            bg={"transparent"}
            type={type}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
