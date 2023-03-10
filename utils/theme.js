const { extendTheme } = require("@chakra-ui/react");

const colors = {
    light: {
        primaryColor: "#4E59D9",
        backgroundSvgColor: "#EDEDED",
        primaryTextColor: "#252525",
        bodyBgColor: "#FFFFFF",
        // Project Card
        CardBg: "#F1F1F1",
        CardText: "#161A22BE",
        // Device Details Page
        descTitle: "#949494",
    },
    dark: {
        primaryColor: "#8080F4",
        backgroundSvgColor: "#181823",
        primaryTextColor: "#ECECEC",
        bodyBgColor: "#1a202c",
        // Project Card
        CardBg: "#161a22",
        CardText: "#E9E9E9D5",
        // Device Details Page
        descTitle: "#949494",
    },
};

const customTheme = extendTheme({ colors });

export default customTheme;
