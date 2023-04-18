import DashboardLayout from "@/components/Layout/DashboardLayout";
import { DashboardSectionTitle } from "@/components/styledComponents/stylesComponents";
import LineSkeletonLoader from "@/components/widgets/LineSkeletonLoader";
import PrimaryButton from "@/components/widgets/PrimaryButton";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const AddBrand = ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [brands, setBrands] = useState([]);
    const [newBrandPost, setNewBrandPost] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const url = process.env.NEXT_PUBLIC_API_URI + "api/brands/";
                const res = await fetch(url);
                const data = await res.json();
                setBrands(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError("Error fetching Data, Please try again later");
            }
        }

        fetchData();
    }, [newBrandPost]); // Fetch data everytime when posted new device

    // Post Data Function
    const postNewDevice = async (deviceName) => {
        const url = process.env.NEXT_PUBLIC_API_URI + "api/brands/";
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
            setNewBrandPost(data);
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
            postNewDevice(deviceName);
        }
    };
    return (
        <>
            <Head>
                <title>NetErnels - All Brands</title>
                <meta name="description" content="neternels kernel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashboardLayout>
                {/* Add Device Btn */}
                <Flex justifyContent="space-between" mb="5">
                    <DashboardSectionTitle>List of Brands</DashboardSectionTitle>
                    <PrimaryButton onClick={onOpen}>Add Brand</PrimaryButton>
                </Flex>
                {/* Table */}
                {error ? (
                    <Text>{error}</Text>
                ) : (
                    <TableContainer>
                        <Table size="sm" variant="striped">
                            <Thead>
                                <Tr>
                                    <Th>Index</Th>
                                    <Th>Brand</Th>
                                    <Th>Added On</Th>
                                    <Th isNumeric>Actions</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {brands?.response?.map((device, i) => (
                                    <Tr
                                        as={motion.tr}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: i * 0.015 } }}
                                        key={i}
                                    >
                                        <Td>{++i}</Td>
                                        <Td>{device.brand}</Td>
                                        <Td>{device.createdAt}</Td>
                                        <Td isNumeric>DELETE</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        {loading && <LineSkeletonLoader />}
                    </TableContainer>
                )}

                {/* Popup Modal To Add New Device */}
                <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add New Device</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel>Brand Name</FormLabel>
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
        </>
    );
};

// export const getServerSideProps = async () => {
//     const url = process.env.NEXT_PUBLIC_API_URI + "api/brands/";
//     const res = await fetch(url);
//     const data = await res.json();

//     return {
//         props: {
//             allDevices: data,
//         },
//     };
// };
export default AddBrand;
