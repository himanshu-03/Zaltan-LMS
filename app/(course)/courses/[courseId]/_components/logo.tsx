import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../../../../components/providers/theme-provider";

export const Logo = () => {
    const { theme } = useTheme();

    const lightLogoSrc = "/light.png";
    const darkLogoSrc = "/dark.png";

    const logoSrc = theme === "light" ? darkLogoSrc : lightLogoSrc;

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
