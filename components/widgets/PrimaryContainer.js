import useColors from "@/hooks/useColors";
import { Container } from "@chakra-ui/react";

const PrimaryContainer = ({ children }) => {
    return (
        <Container maxW="container.xl" color={useColors().primaryTextColor}>
            {children}
        </Container>
    );
};

export default PrimaryContainer;
