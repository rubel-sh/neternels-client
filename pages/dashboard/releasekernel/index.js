import DashboardLayout from "@/components/Layout/DashboardLayout";
import { DashboardSectionTitle } from "@/components/styledComponents/stylesComponents";
import LineSkeletonLoader from "@/components/widgets/LineSkeletonLoader";
import PrimaryButton from "@/components/widgets/PrimaryButton";
import {
    Box,
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
    const [releaseKernel, setReleaseKernel] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    console.log(yourKernels);

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

    // Post Data Function
    const releaseNewKernel = async (deviceName) => {
        const url = process.env.NEXT_PUBLIC_API_URI + "api/device/";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ brand: deviceName }),
        });
        const data = await res.json();
        if (data?.result) {
            setLoading(false);
            setReleaseKernel(data);
            // Close Modal
            onClose();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const deviceName = form.deviceName.value;
        if (deviceName) {
            // Post Data
            releaseNewKernel(deviceName);
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
                                    <Th>Supported Android</Th>
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
                                        <Td isNumeric>Push Update</Td>
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
            <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Release New Kernel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Select Brand</FormLabel>
                                <Input name="deviceName" placeholder="Device Name" />
                            </FormControl>
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
