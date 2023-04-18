import useColors from "@/hooks/useColors";
import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ children, type, onClick }) => {
    return (
        <Button
            color={useColors().primaryColor}
            border={`2px solid `}
            borderColor={useColors().primaryColor}
            px={{ base: "2rem" }}
            rounded={0}
            bg={"transparent"}
            type={type}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
