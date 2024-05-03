// Logo.tsx

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useEffect and useState

const Logo = () => {
    const [logoSrc, setLogoSrc] = useState("/light.png"); // State to hold logo source

    useEffect(() => {
        // Import useTheme dynamically to ensure it's only used on the client-side
        import("../../../../../components/providers/theme-provider").then(({ useTheme }) => {
            const { theme } = useTheme();
            const lightLogoSrc = "/light.png";
            const darkLogoSrc = "/dark.png";
            const selectedLogoSrc = theme === "light" ? lightLogoSrc : darkLogoSrc;
            setLogoSrc(selectedLogoSrc); // Set logo source based on theme
        });
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

export default Logo;
