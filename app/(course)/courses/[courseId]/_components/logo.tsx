// logo.tsx

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useEffect and useState
import { useClient } from "next/client"; // Import useClient from next/client

const Logo = () => {
    const [logoSrc, setLogoSrc] = useState("/light.png"); // State to hold logo source

    useEffect(() => {
        // Load data or perform client-side operations
        setLogoSrc("/dark.png"); // Example: Set logo source dynamically on the client
    }, []); // Run this effect only once on component mount (client-side)

    return (
        <>
            <Link href="/">
                <Image
                    src={logoSrc}
                    alt="Logo"
                    width={130}
                    height={130}
                />
            </Link>
        </>
    );
};

export default useClient(Logo); // Mark Logo component as a client component
