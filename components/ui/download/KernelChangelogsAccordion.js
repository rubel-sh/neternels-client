import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";

const KernelChangelogsAccordion = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple width="full">
            {[
                [...Array(5)].map((_, i) => (
                    <AccordionItem borderTop={0} borderBottom={0}>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#087DA4B2", color: "white" }} rounded="2xl">
                                <Box as="span" flex="1" textAlign="left">
                                    {i}-Feb-2023
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <UnorderedList>
                                <ListItem>Switch to PropImitationHooks</ListItem>
                                <ListItem>Switch to Immersive Navigation</ListItem>
                                <ListItem>Added Volume Long Press Skip Tracks</ListItem>
                                <ListItem>CTS/Play Integrity passes again</ListItem>
                                <ListItem>Switch to PropImitationHooks</ListItem>
                                <ListItem>Switch to Immersive Navigation</ListItem>
                                <ListItem>Added Volume Long Press Skip Tracks</ListItem>
                                <ListItem>CTS/Play Integrity passes again</ListItem>
                            </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>
                )),
            ]}
        </Accordion>
    );
};

export default KernelChangelogsAccordion;
