import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/net-ninja-01.png" width={50} height={40} alt="Logo" />
                {/* <h1>Ninja List</h1> */}
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
    );
}

export default Navbar;