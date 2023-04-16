import PrimaryContainer from "@/components/widgets/PrimaryContainer";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "./Card";

const CardsContainer = ({ devices }) => {
    return (
        <Box my="30px">
            <PrimaryContainer>
                <SimpleGrid
                    as={motion.grid}
                    gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
                    gap={{ base: "40px", md: "20px", lg: "40px" }}
                >
                    {devices?.map((device, i) => (
                        // Change key with device codename to device later
                        <Card key={i} />
                    ))}
                </SimpleGrid>
            </PrimaryContainer>
        </Box>
    );
};

export default CardsContainer;
