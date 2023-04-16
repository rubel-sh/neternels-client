import Head from "next/head";
import { Inter } from "@next/font/google";
import PrimaryContainer from "@/components/widgets/PrimaryContainer";
import { Box, Text } from "@chakra-ui/react";
import useColors from "@/hooks/useColors";
import HeroSection from "@/components/ui/index/HeroSection";
import KernelsDeveloped from "@/components/ui/index/KernelsDeveloped";
import { useState } from "react";
import CardsContainer from "@/components/ui/index/CardsContainer";
import HomepageLayout from "@/components/Layout/HomepageLayout";
import { MyDiv } from "@/components/styledComponents/stylesComponents";

export default function Home() {
    const [devices, setDevices] = useState([...Array(12)]);
    return (
        <>
            <Head>
                <title>NetErnels - Homepage</title>
                <meta name="description" content="neternels kernel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomepageLayout>
                <HeroSection />
                <KernelsDeveloped />
                <CardsContainer devices={devices} />
            </HomepageLayout>
        </>
    );
}
