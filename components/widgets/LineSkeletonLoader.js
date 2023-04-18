import { Skeleton, Stack } from "@chakra-ui/react";

const LineSkeletonLoader = () => {
    return (
        <Stack w={"full"}>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
        </Stack>
    );
};

export default LineSkeletonLoader;
