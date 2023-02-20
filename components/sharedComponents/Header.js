import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PrimaryContainer from "../widgets/PrimaryContainer";

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} py={1}>
                <PrimaryContainer>
                    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                        <Box className="glitch-wrapper">
                            <Text
                                className="glitch"
                                data-glitch="NetErnels"
                                fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                            >
                                NetErnels
                            </Text>
                        </Box>

                        <Flex alignItems={"center"}>
                            <Stack direction={"row"} spacing={7}>
                                <Button onClick={toggleColorMode}>
                                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                                </Button>

                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={"full"}
                                        variant={"link"}
                                        cursor={"pointer"}
                                        minW={0}
                                    >
                                        <Avatar
                                            size={"sm"}
                                            src={"https://avatars.dicebear.com/api/male/username.svg"}
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={"center"}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={"2xl"}
                                                src={"https://avatars.dicebear.com/api/male/username.svg"}
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            <p>Username</p>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <MenuItem>Your Servers</MenuItem>
                                        <MenuItem>Account Settings</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Stack>
                        </Flex>
                    </Flex>
                </PrimaryContainer>
            </Box>
        </>
    );
}
