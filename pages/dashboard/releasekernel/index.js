import DashboardLayout from "@/components/Layout/DashboardLayout";
import { ActionBtn, DashboardSectionTitle } from "@/components/styledComponents/stylesComponents";
import LineSkeletonLoader from "@/components/widgets/LineSkeletonLoader";
import PrimaryButton from "@/components/widgets/PrimaryButton";
import {
    Box,
    ButtonGroup,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [yourKernels, setYourKernels] = useState();
    const [brands, setBrands] = useState([]);
    const [releaseKernel, setReleaseKernel] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const url = process.env.NEXT_PUBLIC_API_URI + "api/devices";
                const res = await fetch(url);
                const data = await res.json();
                setYourKernels(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError("Error fetching Data, Please try again later");
            }
        }

        fetchData();
    }, [releaseKernel]); // Fetch data everytime when posted new device

    // Fetch Brand Names once
    useEffect(() => {
        const fetchBrandsName = async () => {
            const url = process.env.NEXT_PUBLIC_API_URI + "api/brands/";
            const res = await fetch(url);
            const data = await res.json();
            setBrands(data?.response);
        };
        fetchBrandsName();
    }, []);

    console.log(releaseKernel);

    // Post Data Function
    const releaseNewKernel = async (finalData) => {
        console.log(finalData);
        try {
            const url = process.env.NEXT_PUBLIC_API_URI + "api/devices/";
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(finalData),
            });
            const data = await res.json();
            if (data?.result) {
                setLoading(false);
                setReleaseKernel(data);
                // Close Modal
                onClose();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const brandName = form.brandName.value;
        const deviceModel = form.deviceModel.value;
        const deviceCodename = form.deviceCodename.value;
        const deviceChipset = form.deviceChipset.value;
        const deviceRAM = form.deviceRAM.value;
        const deviceBattery = form.deviceBattery.value;
        const deviceReleaseDate = form.deviceReleaseDate.value;
        const supports = form.supports.value;
        const kernelVer = form.kernelVer.value;
        const maintainerName = form.maintainerName.value;
        const maintainerGithub = form.maintainerGithub.value;
        const maintainerTelegram = form.maintainerTelegram.value;
        const kernelDlLink = form.kernelDlLink.value;

        if (kernelDlLink) {
            const finalData = {
                brand: brandName,
                model: deviceModel,
                codename: deviceCodename,
                supports: supports,
                kernelVersion: kernelVer,
                maintainer: maintainerName,
                maintainerLinks: {
                    github: maintainerGithub,
                    telegram: maintainerTelegram,
                },
                status: true,
                downloadLink: kernelDlLink,
                supportGroup: "https://t.me/neternels_chat",
                chipset: deviceChipset,
                ram: deviceRAM,
                phone_released_date: deviceReleaseDate,
                battery: deviceBattery,
            };
            // Post Data
            releaseNewKernel(finalData);
        }
    };

    return (
        <DashboardLayout>
            <Flex w={"full"} flexDirection={"column"} gap="40px" textAlign={"left"}>
                {/* Your Kernels */}
                <Box>
                    <Flex justifyContent="space-between" mb="5">
                        <DashboardSectionTitle>Your Kernels</DashboardSectionTitle>
                        <PrimaryButton onClick={onOpen}>Release New Kernel</PrimaryButton>
                    </Flex>
                    {/* Table */}
                    <TableContainer mt="3">
                        <Table size="sm" variant="striped">
                            <Thead>
                                <Tr>
                                    <Th>Brand</Th>
                                    <Th>Model</Th>
                                    <Th>Codename</Th>
                                    <Th>Kernel Version</Th>
                                    <Th>Supports</Th>
                                    <Th>Last Updated</Th>
                                    <Th isNumeric>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {yourKernels?.response?.map((device, i) => (
                                    <Tr
                                        as={motion.tr}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: i * 0.015 } }}
                                        key={i}
                                    >
                                        <Td>{device.brand}</Td>
                                        <Td>{device.model}</Td>
                                        <Td>{device.codename}</Td>
                                        <Td>{device.kernelVersion}</Td>
                                        <Td>{device.supports}</Td>
                                        <Td>
                                            {new Date(device?.updatedAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </Td>
                                        <Td isNumeric>
                                            <ButtonGroup>
                                                <ActionBtn>Update</ActionBtn>
                                                <ActionBtn>Delete</ActionBtn>
                                            </ButtonGroup>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        {loading && <LineSkeletonLoader />}
                    </TableContainer>
                </Box>

                {/* Inactive Kernels */}
                <Box>
                    <DashboardSectionTitle>Adoptable Kernels</DashboardSectionTitle>
                    {/* Table */}
                    <TableContainer mt="3">
                        <Table size="sm" variant="striped">
                            <Thead>
                                <Tr>
                                    <Th>Brand</Th>
                                    <Th>Model</Th>
                                    <Th>Codename</Th>
                                    <Th>Kernel Version</Th>
                                    <Th>Supported Android</Th>
                                    <Th>Last Updated</Th>
                                    <Th isNumeric>Actions</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {yourKernels?.response?.map((device, i) => (
                                    <Tr key={i}>
                                        <Td>Samsung</Td>
                                        <Td>Galaxy S7 Edge</Td>
                                        <Td>hero2lte</Td>
                                        <Td>4.9.203</Td>
                                        <Td>9</Td>
                                        <Td>18 Feb 2021</Td>
                                        <Td isNumeric>Adopt</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Flex>
            {/* Popup Modal To Add New Device */}
            <Modal size="3xl" closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Release New Kernel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <SimpleGrid gridTemplateColumns={"1fr 1fr 1fr"} gap={5}>
                                <FormControl isRequired>
                                    <FormLabel>Select Brand</FormLabel>
                                    {/* Automatically From API */}
                                    <Select placeholder="Select option" name="brandName">
                                        {brands?.map((brand, i) => (
                                            <option key={i} value={brand.brand}>
                                                {brand.brand}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Device Model</FormLabel>
                                    <Input name="deviceModel" placeholder="Device Model Name" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Codename</FormLabel>
                                    <Input name="deviceCodename" placeholder="Device Codename" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Chipset</FormLabel>
                                    <Input name="deviceChipset" placeholder="Device Chipset" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>RAM</FormLabel>
                                    <Input name="deviceRAM" placeholder="Device RAM" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Battery Size</FormLabel>
                                    <Input name="deviceBattery" placeholder="Device Battery in MAh" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Phone Release Date</FormLabel>
                                    <Input name="deviceReleaseDate" placeholder="Phone Release Date" />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Supported Version</FormLabel>
                                    <Input type="number" name="supports" placeholder="Android Version (Number Only)" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Kernel Version</FormLabel>
                                    <Input name="kernelVer" placeholder="Kernel Version" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Maintainer</FormLabel>
                                    <Input name="maintainerName" placeholder="Maintainer Name" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Github Profile</FormLabel>
                                    <Input name="maintainerGithub" placeholder="Github Profile Link" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Telegram Profile</FormLabel>
                                    <Input name="maintainerTelegram" placeholder="Telegram Link" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Kernel DL Link</FormLabel>
                                    <Input name="kernelDlLink" placeholder="Download Link for the kernel" />
                                </FormControl>
                            </SimpleGrid>
                            <Box py="5">
                                <PrimaryButton type="submit">Submit</PrimaryButton>
                            </Box>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </DashboardLayout>
    );
};

export default index;
