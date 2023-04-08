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
            <HomepageLayout>
                <HeroSection />
                <KernelsDeveloped />
                <CardsContainer devices={devices} />
            </HomepageLayout>
        </>
    );
}
