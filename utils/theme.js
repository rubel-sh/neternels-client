const { extendTheme } = require("@chakra-ui/react");

const colors = {
    light: {
        primaryColor: "#4E59D9",
        backgroundSvgColor: "#EDEDED",
        primaryTextColor: "#181823",
        bodyBgColor: "#FFFFFF",
    },
    dark: {
        primaryColor: "#8080F4",
        backgroundSvgColor: "#181823",
        primaryTextColor: "#FFFFFF",
        bodyBgColor: "#1a202c",
    },
};

const customTheme = extendTheme({ colors });

export default customTheme;
