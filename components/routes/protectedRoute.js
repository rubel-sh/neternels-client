import { useEffect, useState } from "react";
import Router from "next/router";

const protectedRoute = (WrappedComponent) => {
    const WithAuth = (props) => {
        const [authenticated, setAuthenticated] = useState(false);

        useEffect(() => {
            // Check if user is authenticated
            const isAuthenticated = true; // Replace with your authentication logic
            setAuthenticated(isAuthenticated);

            // If not authenticated, redirect to login page
            if (!isAuthenticated) {
                Router.push("/login");
            }
        }, []);

        if (!authenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return WithAuth;
};

export default protectedRoute;
