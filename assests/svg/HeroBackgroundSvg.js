import { Box } from "@chakra-ui/react";
import React from "react";

const HeroBackgroundSvg = ({ color }) => {
    console.log(color);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <Box
                as="path"
                fill={color}
                fill-opacity="1"
                d="M0,224L30,213.3C60,203,120,181,180,186.7C240,192,300,224,360,208C420,192,480,128,540,112C600,96,660,128,720,144C780,160,840,160,900,170.7C960,181,1020,203,1080,186.7C1140,171,1200,117,1260,101.3C1320,85,1380,107,1410,117.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></Box>
        </svg>
    );
};

export default HeroBackgroundSvg;