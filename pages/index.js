import Head from "next/head";
import HeroSection from "@/components/ui/index/HeroSection";
import KernelsDeveloped from "@/components/ui/index/KernelsDeveloped";
import { useEffect, useState } from "react";
import CardsContainer from "@/components/ui/index/CardsContainer";
import HomepageLayout from "@/components/Layout/HomepageLayout";

export default function Home({ allDevices }) {
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
                <CardsContainer allDevices={allDevices} />
            </HomepageLayout>
        </>
    );
}

export const getServerSideProps = async () => {
    const url = process.env.NEXT_PUBLIC_API_URI + "api/devices";
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            allDevices: data,
        },
    };
};
